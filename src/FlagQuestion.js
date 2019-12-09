import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class FlagQuestion extends Component {
  static propTypes = {
    flag: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <img src={this.props.flag} alt="flag" />
      </div>
    );
  }
}
