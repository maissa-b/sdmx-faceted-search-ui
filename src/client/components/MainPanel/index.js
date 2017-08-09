import React from 'react';
import PropTypes from 'prop-types';

import './main_panel.css';
import SearchPanel from '../SearchPanel/';
import ResultsPanel from '../ResultsPanel';

const MainPanel = ({ searchValue, search, resultItems, fruits, searchHandler, addToCard, isSearchDisabled }) => (
  <div className="mainpanel">
    <div className="pt-card mainpanel_inner">
      <SearchPanel
        className="search-panel-item"
        searchHandler={searchHandler}
        search={search}
        isSearchDisabled={isSearchDisabled}
      />
      <ResultsPanel
        fruits={fruits}
        className="results-panel-item"
        resultItems={resultItems}
        searchValue={searchValue}
        addToCard={addToCard}
      />
    </div>
  </div>
);

MainPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
  searchHandler: PropTypes.func.isRequired,
  addToCard: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  fruits: PropTypes.array.isRequired,
  search: PropTypes.func.isRequired,
  isSearchDisabled: PropTypes.bool.isRequired,
};

export default MainPanel;
