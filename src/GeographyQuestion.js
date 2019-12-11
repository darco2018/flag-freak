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

    // get relevant data from country objects
    options = options.map(
      opt => opt.name
    );
    console.log(">>>>>>>>>>>>>>>>> correctAnswer" + correctAnswer);
    console.log(correctAnswer);

    /* correctAnswer = correctAnswer.name;
    console.log("cor " + correctAnswer);
    const flagUrl = correctAnswer.flag;
    console.log("cor url " + flagUrl);
    console.log("cor cap " + correctAnswer.capital); */

    const message =
      status === gameStatus.WINNER
        ? `Correct!${correctAnswer.name}`
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
