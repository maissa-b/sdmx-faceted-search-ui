import React from 'react';
import PropTypes from 'prop-types';

import './results_panel.css';
import SearchInfo from '../SearchInfo';
import DataFlow from '../DataFlow';

const ResultsPanel = ({ resultItems, searchValue }) => {
  const items = resultItems.filter(item =>
    item.value.match(searchValue.toLowerCase()) !== null);

  const display = items.map(result => <DataFlow key={result.id} result={result.value} />);

  return (
    <div className="results-panel-container">
      <SearchInfo numberResults={items.length} />
      <ul>
        {display}
      </ul>
    </div>
  );
};

ResultsPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default ResultsPanel;
