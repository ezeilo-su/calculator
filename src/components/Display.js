import React from 'react';
import PropTypes from 'prop-types';
// import '../assets/Display.css';

const Display = ({ val }) => (
  <div className="display">{val}</div>
);

Display.propTypes = {
  val: PropTypes.string,
};

Display.defaultProps = {
  val: '0',
};

export default Display;
