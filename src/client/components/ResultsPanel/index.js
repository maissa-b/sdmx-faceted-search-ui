import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import './results_panel.css';
import SearchInfo from '../SearchInfo';
import DataFlow from '../DataFlow';
import PromiseTutorial from '../PromiseTutorial';

const ResultsPanel = ({ resultItems, fruits, searchValue, addToCard }) => (
  <div className="resultpanel">
    <SearchInfo numberResults={resultItems.length} searchValue={searchValue} />
    <ul>
      { [].map(result => <DataFlow key={result.id} result={result} addToCard={addToCard} />) }
    </ul>
    <PromiseTutorial fruits={fruits} />
  </div>
);

ResultsPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  addToCard: PropTypes.func.isRequired,
  fruits: PropTypes.array.isRequired,
};

export default pure(ResultsPanel);
