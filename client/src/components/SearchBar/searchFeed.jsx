/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import SearchFeedEntry from './searchEntry.jsx';
import SearchMovieFeedEntry from './SearchMovieFeedEntry.jsx';
import './search.css';

const viewSwitch = (view, shows, movies, addShow, addMovie) => {
  if (view === 'Shows') {
    return (
      <div>
        <div className="search-results-header">TV Shows: </div>
        <div className="scrolling-container">
          {shows.map(({ show }, i) => <SearchFeedEntry className="search-feed-entry" key={show + i} show={show} onClick={addShow} />)}
        </div>
      </div>
    );
  } if (view === 'Movies') {
    return (
      <div>
        <div className="search-results-header">Movies: </div>
        <div className="scrolling-container">
          {movies.map((movie) => <SearchMovieFeedEntry className="search-feed-entry" key={movie.id} movie={movie} onClick={addMovie} />)}
        </div>
      </div>
    );
  }
};

const SearchFeed = ({ shows, movies, addShow, addMovie, view, searchViewSwitcher }) => (
  <div>
    <button
      className="switcher"
      onClick={() => {
        searchViewSwitcher();
      }}
    >
      {view}
    </button>
    {viewSwitch(view, shows, movies, addShow, addMovie)}
  </div>
);

export default SearchFeed;
