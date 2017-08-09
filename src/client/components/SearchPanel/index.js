import React from 'react';
import PropTypes from 'prop-types';

import './search_panel.css';
import SearchBar from '../SearchBar';

const SearchPanel = ({ searchHandler, search, isSearchDisabled }) => (
  <div className="searchpanel">
    <SearchBar searchHandler={searchHandler} />
    <button
      id="button_dispatcher"
      disabled={isSearchDisabled}
      onClick={(e) => {
        e.preventDefault();
        search();
      }}
    >
      Search
    </button>
  </div>
);

SearchPanel.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  isSearchDisabled: PropTypes.bool.isRequired,
};

export default SearchPanel;
