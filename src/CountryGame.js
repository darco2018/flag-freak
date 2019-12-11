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
      status: undefined,
      // ---------------------
      userChoice: undefined
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

    const correctAnswer = options[Math.floor(Math.random() * NO_OF_OPTIONS)];
    
    this.setState(
      {
        options,
        correctAnswer,
        userChoice: -1,
        status: gameStatus.UNDECIDED
      },
      () => {
        console.log("options" + options);
        console.log("correctAnswer" + correctAnswer);
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
      this.startGame();
    }
  };

  handleChange = e => {
    console.log('Setting as userChoice...:' + e.target.id);
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
          console.log('COUNTRY_DATA: ' + this.state.COUNTRY_DATA.length);
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
    const { options, flagUrl, status, correctAnswer, userChoice } = this.state;

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
          flagUrl={flagUrl}
          status={status}
          correctAnswer={correctCountry}
          userChoice={userChoice}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      );
    }
  }
}
