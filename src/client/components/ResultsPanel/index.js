import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

import './results_panel.css';
import SearchInfo from '../SearchInfo';
import DataFlow from '../DataFlow';

const ResultsPanel = ({ dataflows, searchValue, addToCard }) => (
  <div className="resultpanel">
    <SearchInfo numberResults={dataflows.length} searchValue={searchValue} />
    <ul>
      { dataflows.map(dataflow => <DataFlow key={dataflow.id} dataflows={dataflow} addToCard={addToCard} />) }
    </ul>
  </div>
);

ResultsPanel.propTypes = {
  // resultItems: PropTypes.array.isRequired,
  dataflows: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default pure(ResultsPanel);

// search
// dataflowsloaded
