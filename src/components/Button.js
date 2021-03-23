import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <button
      className={`calc-button ${props.slug}`}
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
