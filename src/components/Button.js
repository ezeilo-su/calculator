import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ uniqueKey, name }) => (
  <button className={`calc-key ${uniqueKey}`} type="button">{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  uniqueKey: PropTypes.string.isRequired,
};

export default Button;
