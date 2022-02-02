import React, { useState } from 'react';
import SearchCastAndCrew from './SearchCastAndCrew.jsx';

const Info = ({ open, show, setOpen, handleClose, setState, state, getSummary }) => {
  return (
    <div id="infoShade">
      <h4>TRAILER</h4>
      <h4>SUMMARY</h4>
      <button
        className="summary-button"
        onClick={(event) => {
          event.stopPropagation();
          setState(getSummary());
        }}
      >
        Summary
      </button>
      <div className="show-summary">
        {state}
      </div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Info;
