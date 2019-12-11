import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, onButtonClick, type }) => {
  // note optionsla prop 'type'
  return (
    <button type={type || 'button'} onClick={onButtonClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default Button;
