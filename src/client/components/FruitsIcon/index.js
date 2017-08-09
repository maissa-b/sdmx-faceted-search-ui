import React from 'react';
import PropTypes from 'prop-types';

import './fruits_icon.css';

const FruitsIcon = ({ icon, color }) => (
  <div className="fruit" style={{ color }}>
    <i className={`fa fa-${icon}`} />
  </div>
);

FruitsIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default FruitsIcon;
