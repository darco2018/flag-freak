import React from 'react';
import PropTypes from 'prop-types';
import './FlagOptions.css';

export default function FlagOptions(props) {
  let { options, userChoice } = props;

  options =
    options &&
    options.map((country, i) => (
      <span key={country.id}>
        <input
          type="radio"
          name="choice"
          id={country.id}
          value={country.id}
          onChange={props.handleChange}
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
  handleChange: PropTypes.func.isRequired
};
