import React from 'react';
import PropTypes from 'prop-types';
import './FlagOptions.css'

export default function FlagOptions(props) {
  let { options, userChoice } = props;

  options =
    options &&     
    options.map((country, i) => (
      <span  key={country}>
        <input          
          type="radio"
          name="choice"
          id={country}
          value={country}
          onChange={props.handleChange}
          checked={userChoice === country ? true : false}
        />
        <label htmlFor={country}>{country}</label>
      </span>
    ));

  return <div id="options">{options}</div>;
}

FlagOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  userChoice: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};
