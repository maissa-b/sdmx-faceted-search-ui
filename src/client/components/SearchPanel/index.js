import React from 'react';
import PropTypes from 'prop-types';

import './search_panel.css';
import SearchBar from '../SearchBar';

const SearchPanel = ({ getDataflows }) => (
  <div className="searchpanel">
    <SearchBar getDataflows={getDataflows} />
  </div>
);

SearchPanel.propTypes = {
  // searchHandler: PropTypes.func.isRequired,
  getDataflows: PropTypes.func.isRequired,
};

export default SearchPanel;
