import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import './data_flow.css';

const DataFlow = ({ dataflows, handleInput }) => (
  <div className="pt-card pt-elevation-0 dataflowcontainer">
    <div className="dataflowinfo">
      <li className="dataflowname">{dataflows.name}</li>
      <li className="dataflowname">{dataflows.id}</li>
    </div>
    <button id={dataflows.id} onClick={handleInput} />
  </div>
);

// Object.entries
// api/config

// error handling :
// -> request json
// verb, uri, body
// action error -> au moins message et status (vert et rouge) et header, id incremental
// willReceiveProps

DataFlow.propTypes = {
  dataflows: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
};

const handler = withHandlers({
  handleInput: ({ addToCard }) => event => {
    event.preventDefault();
    addToCard(event.target.id);
  },
})(DataFlow);

export default handler;

// steps toaster
// 1 :
