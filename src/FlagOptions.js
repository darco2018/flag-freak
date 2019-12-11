import React from 'react';
import PropTypes from 'prop-types';
import './FlagOptions.css';

export default function FlagOptions({ options, userChoice, onAnswerChange }) {
  options =
    options &&
    options.map((country, i) => (
      <span key={country.id}>
        <input
          type="radio"
          id={country.id}
          value={country.id}
          onChange={onAnswerChange}
          checked={userChoice === country.id ? true : false}
        />
        <label htmlFor={country.name}>{country.name}</label>
      </span>
    ));

  return <div id="options">{options}</div>;
}

FlagOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  userChoice: PropTypes.number.isRequired,
  onAnswerChange: PropTypes.func.isRequired
};
