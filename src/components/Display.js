import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ val }) => (
  <button type="button" className="display">{val}</button>
);

Display.propTypes = {
  val: PropTypes.string,
};

Display.defaultProps = {
  val: '0',
};

export default Display;
