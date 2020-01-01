import React from 'react';
import PropTypes from 'prop-types';
import './FlagOptions.css';

export default function FlagOptions({ options, userChoice, onAnswerChange }) {


const handleClick = (e) => {
  let userChoice =  e.target.tagName === "LABEL" ? e.target.previousSibling.value : e.target.value;
  onAnswerChange(userChoice);
}

  options =
    options &&
    options.map((country, i) => (
      <span className="option"  key={country.id}>
        <input
          type="radio"
          id={country.id}
          value={country.id}
          onChange={handleClick}
          checked={userChoice === country.id ? true : false}
        />
        <label htmlFor={country.name} onClick={handleClick}>{country.name}</label>
      </span>
    ));

  return <div id="options">{options}</div>;
}

FlagOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  userChoice: PropTypes.number.isRequired,
  onAnswerChange: PropTypes.func.isRequired
};
