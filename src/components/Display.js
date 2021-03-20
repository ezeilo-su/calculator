import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <button type="button" className="display">{result}</button>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
