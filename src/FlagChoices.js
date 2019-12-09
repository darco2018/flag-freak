import React from 'react';
import PropTypes from 'prop-types';

export default function FlagChoices(props) {
  let { choices } = props;
  choices = choices.map((country, i) => (
    <span key={country}>
      <input
        style={{ marginLeft: '20px' }}
        type="radio"
        name="choice"
        value={country}
      />
      {country}
    </span>
  ));

  return <div>{choices}</div>;
}

FlagChoices.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired
};
