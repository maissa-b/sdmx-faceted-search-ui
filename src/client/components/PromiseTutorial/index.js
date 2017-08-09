import React from 'react';
import PropTypes from 'prop-types';

import './promise_tutorial.css';

const Square = ({ fruit }) => { //eslint-disable-line
  if (!fruit) {
    return <div className="square" />;
  }
  return (
    <div className="square">
      <div className="content">
        <div className="table">
          <div className="table-cell">
            <div className="fruits" style={{ color: fruit.color }}>
              <i className={`fa fa-${fruit.icon}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ fruits }) => (
  <div className="grid">
    {fruits.map((fruit, id) => (
      <Square key={id} fruit={fruit} /> //eslint-disable-line
    ))}
  </div>
);


const PromiseTutorial = ({ fruits }) => (
  <div>
    <Grid fruits={fruits} />
  </div>
);

PromiseTutorial.propTypes = {
  fruits: PropTypes.array.isRequired,
};

Square.propTypes = {
  fruit: PropTypes.object.isRequired,
};

Grid.propTypes = {
  fruits: PropTypes.array.isRequired,
};

export default PromiseTutorial;
