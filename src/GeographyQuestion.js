import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import FlagOptions from './FlagOptions';
import FlagAnswer from './FlagAnswer';
import Flag from './Flag';
import { gameStatus } from './CountryGame';

export default class GeographyQuestion extends Component {
  /* static propTypes = {
    prop: PropTypes
  }; */

  render() {
    let {
      options,
      status,
      correctAnswer,
      userChoice,
      handleChange,
      handleClick
    } = this.props;

    
    console.log(" correctAnswer in GeoQue: " + correctAnswer);
    console.log(correctAnswer);

    const message =
      status === gameStatus.WINNER
        ? `Correct! ${correctAnswer.name}`
        : `Incorrect. Correct answer: ${correctAnswer.name}`;
    return (
      <>
        {status === gameStatus.UNDECIDED ? (
          <FlagOptions
            options={options}
            userChoice={userChoice}
            handleChange={handleChange}
          />
        ) : (
          <FlagAnswer message={message} />
        )}

        <Button
          handleClick={handleClick}
          text={status === gameStatus.UNDECIDED ? 'Check' : 'Next'}
        />
        <Flag flagUrl={correctAnswer.flag} />
      </>
    );
  }
}
