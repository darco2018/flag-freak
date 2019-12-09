import React, { Component } from 'react';
/* import PropTypes from 'prop-types';
 */ import Button from './Button';
import FlagChoices from './FlagChoices';
import FlagAnswer from './FlagAnswer';
import FlagQuestion from './FlagQuestion';

const COUNTRIES = ['Poland', 'USA', 'Canada', 'India', 'Japan', 'Russia'];
const NO_OF_CHOICES = 4;

export default class CountryGame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

  componentDidMount() {
    // get flag https: ....   ${answer}
    /* console.log(countryNames);
    console.log(answer); */
  }

  render() {
    let numbers = this.getDistinctRandomNumbers(
      NO_OF_CHOICES,
      COUNTRIES.length
    );
    let choices = numbers.map(num => COUNTRIES[num]);
    const answer = choices[Math.floor(Math.random() * NO_OF_CHOICES)];
    const flag = 'https://via.placeholder.com/350'; //
    return (
      <>
        <FlagChoices choices={choices} /> or
        <FlagAnswer answer={answer} />
        <Button />
        <FlagQuestion flag={flag} />        
      </>
    );
  }
}
