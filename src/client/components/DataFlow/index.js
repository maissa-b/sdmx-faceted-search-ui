import React from 'react';
import PropTypes from 'prop-types';

import './data_flow.css';

const DataFlow = ({ result }) => (
  <div className="dataflow-container">
    <li>{ result }</li>
  </div>
);

DataFlow.propTypes = {
  result: PropTypes.string.isRequired,
};

export default DataFlow;
