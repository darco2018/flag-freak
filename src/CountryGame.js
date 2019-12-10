import React, { Component } from 'react';
/* import PropTypes from 'prop-types';
 */ import Button from './Button';
import FlagOptions from './FlagOptions';
import FlagAnswer from './FlagAnswer';
import Flag from './Flag';

const COUNTRIES = ['Poland', 'USA', 'Canada', 'India', 'Japan', 'Russia'];
let COUNTRY_DATA = [];
const NO_OF_OPTIONS = 4;
const gameStatus = {
  UNDECIDED: 0,
  WINNER: 1,
  LOST: 2
};

export default class CountryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: null,
      correctAnswer: null,
      flagUrl: '',
      userChoice: null,
      status: null
    };
  }

  componentDidMount() {
    this.fetchJSONCountryData()
      .then(data => {
        COUNTRY_DATA = data;
        console.log('COUNTRY_DATA: ' + COUNTRY_DATA.length);
        this.initilizeGame();
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchJSONCountryData() {
    return fetch(
      'https://restcountries.eu/rest/v2/all?fields=name;capital;flag'
    )
      .then(res => res.json())
      .then(data => {
        /*  console.log(COUNTRY_DATA.length); */
        return data.length > 0 ? data : [];
      })
      .catch(err => console.log(err));
  }

  initilizeGame() {
    let numbers = this.getDistinctRandomNumbers(
      NO_OF_OPTIONS,
      COUNTRY_DATA.length
    );
    
    const optionsObjects = numbers.map(num => COUNTRY_DATA[num]);
    const correctAnswerObj = optionsObjects[Math.floor(Math.random() * NO_OF_OPTIONS)];

    let options = numbers.map(num => COUNTRY_DATA[num].name);    
    const correctAnswer = correctAnswerObj.name;
    const flagUrl = correctAnswerObj.flag;

    this.setState(
      {
        options,
        correctAnswer,
        flagUrl,
        userChoice: '',
        status: gameStatus.UNDECIDED
      },
      () => {
        console.log(options);
        console.log(correctAnswer);
        console.log(flagUrl);
      }
    );
  }

  handleClick = e => {
    // arrow func has the same this as parent context
    // so no bind() necessary

    if (this.state.status === gameStatus.UNDECIDED) {
      if (!this.state.userChoice) {
        return;
      }

      let isWinner =
        this.state.userChoice === this.state.correctAnswer ? true : false;

      this.setState({
        status: isWinner ? gameStatus.WINNER : gameStatus.LOST
      });
    } else {
      this.initilizeGame();
    }
  };

  handleChange = e => {
    console.log('Choosing...:' + e.target.value);
    this.setState({
      userChoice: e.target.value
    });
  };

  getDistinctRandomNumbers(elementsWanted, options) {
    let elements = [];
    while (elements.length < elementsWanted) {
      const random = Math.floor(Math.random() * options);
      if (!elements.includes(random)) {
        elements.push(random);
      }
    }
    return elements;
  }

  render() {
    const { options, flagUrl, status, correctAnswer } = this.state;
    const message =
      status === gameStatus.WINNER
        ? 'Correct!'
        : `Incorrect. Correct answer: ${correctAnswer}`;

    return (
      <>
        {status === gameStatus.UNDECIDED ? (
          <FlagOptions
            options={options}
            userChoice={this.state.userChoice}
            handleChange={this.handleChange}
          />
        ) : (
          <FlagAnswer message={message} />
        )}

        <Button
          handleClick={this.handleClick}
          text={status === gameStatus.UNDECIDED ? 'Check' : 'Next'}
        />
        <Flag flagUrl={flagUrl} />
      </>
    );
  }
}
