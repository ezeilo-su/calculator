import React from 'react';
import PropTypes from 'prop-types';
// import '../assets/Button.css';

export default function Button(props) {
  return (
    <button
      className={`button ${props.slug}`}
      type="button"
      onClick={props.clickHandler}
    >
      {props.name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
