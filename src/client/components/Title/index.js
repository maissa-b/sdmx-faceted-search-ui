import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ title }) => (
  <div className="title-container">
    <h2>{ title }</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
