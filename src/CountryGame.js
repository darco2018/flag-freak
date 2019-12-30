import React, { Component } from 'react';
import GeographyQuestion from './GeographyQuestion';

const NO_OF_OPTIONS = 4;
export const gameStatus = {
  UNDECIDED: 0,
  WINNER: 1,
  LOST: 2
};

const API_URL = 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag';

export default class CountryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      COUNTRY_DATA: [],
      options: [],
      correctAnswer: undefined,
      status: gameStatus.UNDECIDED,
      userChoice: -1
    };
  }

  componentDidMount() {
    this.populateCountries(API_URL)
      .then(() => {
        this.startGame();
      })
      .catch(err => {
        console.log('Error initializing game: ' + err);
      });
  }

  startGame() {
    let options = this.getDistinctRandomNumbers(
      NO_OF_OPTIONS,
      this.state.COUNTRY_DATA.length
    );

    const random = Math.floor(Math.random() * NO_OF_OPTIONS);
    const correctAnswer = options[random];

    this.setState({
      options,
      correctAnswer,
      userChoice: -1,
      status: gameStatus.UNDECIDED
    });
  }

  handleButtonClick = e => {
    if (this.state.status === gameStatus.UNDECIDED) {
      if (this.state.userChoice === -1) {
        return;
      }

      let isWinner =
        this.state.userChoice === this.state.correctAnswer ? true : false;

      this.setState({
        status: isWinner ? gameStatus.WINNER : gameStatus.LOST
      });
    } else {
      this.startGame();
    }
  };

  handleAnswerChange = e => {
    this.setState({
      userChoice: Number(e.target.value)
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

  populateCountries(url) {
    return this.fetchArrOfObjectsFrom(url)
      .then(countriesJSON => {
        this.setState({ COUNTRY_DATA: countriesJSON }, () => {
          console.log(
            'callback will fire after setting state: ' +
              this.state.COUNTRY_DATA.length
          );
        });
      })
      .catch(err => {
        console.log('Error populating countries ' + err);
      });
  }

  fetchArrOfObjectsFrom(url) {
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        return data.length > 0 ? data : [];
      })
      .catch(err => console.log('Error fetching data ' + err));
  }

  render() {
    const { options, status, correctAnswer, userChoice } = this.state;

    // turn indexes into country objects
    const countries = options.map(index => {
      return { id: index, ...this.state.COUNTRY_DATA[index] };
    });

    const correctCountry = this.state.COUNTRY_DATA[correctAnswer];

    // note below
    if (correctAnswer === undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <GeographyQuestion
          options={countries}
          status={status}
          correctAnswer={correctCountry}
          userChoice={userChoice}
          onAnswerChange={this.handleAnswerChange}
          onButtonClick={this.handleButtonClick}
        />
      );
    }
  }
}
