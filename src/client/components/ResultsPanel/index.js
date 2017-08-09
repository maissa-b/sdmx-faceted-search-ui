import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import './results_panel.css';
import SearchInfo from '../SearchInfo';
import DataFlow from '../DataFlow';

const ResultsPanel = ({ resultItems, searchValue, addToCard }) => (
  <div className="resultpanel">
    <SearchInfo numberResults={resultItems.length} searchValue={searchValue} />
    <ul>
      { resultItems.map(result => <DataFlow key={result.id} result={result} addToCard={addToCard} />) }
    </ul>
  </div>
);

ResultsPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default pure(ResultsPanel);

// search
// dataflowsloaded
