import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Connect from '../connect';

import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

class App extends Component {
  state = {
    isHidden: true,
  }
  showOverlayPanel = () => {
    this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
  };
  render() {
    const { isHidden } = this.state;
    const { title, langs, resultItems } = this.props;
    return (
      <div className="app-container">
        <SidePanel isHidden={isHidden} />
        <Container
          title={title}
          langs={langs}
          resultItems={resultItems}
          showOverlayPanel={this.showOverlayPanel}
          isHidden={isHidden}
        />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
};

export default Connect(App);
