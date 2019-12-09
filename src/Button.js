import React from 'react';
import PropTypes from 'prop-types';
import "./Button.css" 

export default function Button(props) {
  return (
    <button onClick={props.handleClick} >
      {props.text}
    </button>
  );
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
