import React from 'react';
import PropTypes from 'prop-types';

import './faceted_box.css';
import Items from '../Items';

const FacetedBox = ({ titleName }) => (
  <div className="faceted-box-container">
    <p>{ titleName }</p>
    <ul>
      <Items />
    </ul>
  </div>
);

FacetedBox.propTypes = {
  titleName: PropTypes.string.isRequired,
};

export default FacetedBox;
