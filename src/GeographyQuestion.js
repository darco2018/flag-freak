import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import FlagOptions from './FlagOptions';
import FlagAnswer from './FlagAnswer';
import Flag from './Flag';
import { gameStatus } from './CountryGame';

export default function GeographyQuestion({
  status,
  options,
  correctAnswer,
  userChoice,
  onAnswerChange,
  onButtonClick
}) {
  return (
    <div>
      {status === gameStatus.UNDECIDED ? (
        <FlagOptions
          options={options}
          userChoice={userChoice}
          onAnswerChange={onAnswerChange}
        />
      ) : (
        <FlagAnswer
          correct={status === gameStatus.WINNER}
          correctAnswer={correctAnswer}
        />
      )}

      <Button
        onButtonClick={onButtonClick}
        text={status === gameStatus.UNDECIDED ? 'Check' : 'Next'}
      />
      <Flag flagUrl={correctAnswer.flag} />
    </div>
  );
}

GeographyQuestion.propTypes = {
  status: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  correctAnswer: PropTypes.object.isRequired,
  userChoice: PropTypes.number.isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};
