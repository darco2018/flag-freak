import React from 'react';
import PropTypes from 'prop-types';

export default function FlagAnswer(props) {
  return (
    <div>
      <p>{props.answer}</p>
    </div>
  );
}

FlagAnswer.propTypes = {
    answer: PropTypes.string.isRequired
};
