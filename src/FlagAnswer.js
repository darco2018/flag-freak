import React from 'react';
import PropTypes from 'prop-types';

export default function FlagAnswer(props) {
  return (
    <div id="options">
      <p>{props.message}</p>
    </div>
  );
}

FlagAnswer.propTypes = {
  message: PropTypes.string.isRequired
};
