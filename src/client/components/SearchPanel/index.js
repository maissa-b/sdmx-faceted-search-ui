import React from 'react';
import PropTypes from 'prop-types';

import './search_panel.css';
import SearchBar from '../SearchBar';
import SearchButton from '../SearchButton';

const SearchPanel = ({ getSearchValue }) => (
  <div className="search-panel-container">
    <SearchBar getSearchValue={getSearchValue} />
    <SearchButton />
  </div>
);

SearchPanel.propTypes = {
  getSearchValue: PropTypes.func.isRequired,
};

export default SearchPanel;
