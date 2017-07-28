import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.PureComponent {
  getChildContext() {
    const { store } = this.props;
    return { store };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object.isRequired,
};

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default Provider;
