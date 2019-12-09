import React, { Component } from 'react';
import './Flag.css'

import PropTypes from 'prop-types';

export default class Flag extends Component {
  static propTypes = {
    flagUrl: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <img src={this.props.flagUrl} alt="flag" />
      </div>
    );
  }
}
