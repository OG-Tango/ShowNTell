/* eslint-disable max-len */
import React, { useState } from 'react';
import './search.css';
import noImgAvail from './no_img_avail.png';
import SearchCastAndCrew from './SearchCastAndCrew.jsx';
import Info from './Info.jsx';

const SearchFeedEntry = ({ show, onClick }) => {
  const [state, setState] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(show);
  // All this is doing is parsing show.summary object.
  const getSummary = () => {
    let summary = show.summary.replace(/<p>|<\/p>/g, '');
    const output = [];
    while (summary.length > 0) {
      if (summary.search(/<i>/) !== -1) {
        output.push(summary.slice(0, summary.search(/<i>/)));
        summary = summary.slice(summary.search(/<i>/) + 3);

        const italic = summary.slice(0, summary.search(/<\/i/));
        output.push(<i key={italic + summary.search(/<i>/)}>{italic}</i>);
        summary = summary.slice(summary.search(/<\/i>/) + 4);
      } else if (summary.search(/<b>/) !== -1) {
        output.push(summary.slice(0, summary.search(/<b>/)));
        summary = summary.slice(summary.search(/<b>/) + 3);

        const bold = summary.slice(0, summary.search(/<\/b/));
        output.push(<b key={bold + summary.search(/<b>/)}>{bold}</b>);
        summary = summary.slice(summary.search(/<\/b>/) + 4);
      } else {
        output.push(summary);
        summary = '';
      }
    }

    return output;
  };
  // if there is an image, get the image
  const getImage = () => {
    if (show.image !== null) {
      return show.image.medium;
    }
  };

  // if no image, get the new image
  const getPicUnavail = () => {
    if (show.image === null) {
      return noImgAvail;
    }
  };

  return (
    <>
      <div className="show-card">
        <div className="show-name" value={show.id} onClick={() => onClick(show)}>
          <div className="show-name">{show.name}</div>
          {/* the app will check for an image and present it */}
          <img
            className="show-img"
            onClick={(event) => {
              event.stopPropagation();
              handleOpen();
            }}
            src={getImage()}
            alt=""
          />
          <img
            className="unavail-img"
            onClick={(event) => {
              event.stopPropagation();
              handleOpen();
            }}
            src={getPicUnavail()}
            alt=""
          />
          {/* <button
            className="summary-button"
            onClick={(event) => {
              event.stopPropagation();
              setState(getSummary());
            }}
          >
            Summary
          </button> */}
          {/* <div className="show-summary">
            {state}
          </div> */}
          <SearchCastAndCrew
            key={show.id}
            show={show}
          />
        </div>
      </div>
      <div>
        {open ? <Info show={{ show }} open={open} handleClose={handleClose} getSummary={getSummary} state={state} setState={setState} /> : null}
      </div>
    </>
  );
};

export default SearchFeedEntry;
