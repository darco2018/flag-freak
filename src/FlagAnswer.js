import React from 'react';
import PropTypes from 'prop-types';
                                       // props
export default function FlagAnswer({ correctAnswer, correct }) {
  const message = correct ? (
    <p>
      <span style={{ color: 'green' }}>Correct!</span> {correctAnswer.name}
    </p>
  ) : (
    <p>
      <span style={{ color: 'red' }}>Incorrect.</span> Correct answer:{' '}
      {correctAnswer.name}
    </p>
  );

  return <div id="options">{message}</div>;
}

FlagAnswer.propTypes = {
  correct: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.object.isRequired
};
