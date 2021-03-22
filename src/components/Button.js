import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ key, name }) => (
  <button
    className={`calc-key ${key}`}
    type="button"
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Button;
