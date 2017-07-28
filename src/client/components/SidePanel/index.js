import React, { Components } from 'react';

import './side_panel.css';
import FacetedBox from '../FacetedBox';

const SidePanel = () => (
  <div className="side-panel-container">
    <FacetedBox titleName="premier" />
    <FacetedBox titleName="deuxieme" />
    <FacetedBox titleName="troisieme" />
    <FacetedBox titleName="quatrieme" />
  </div>
);

export default SidePanel;
