import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ name, dataTestid }) {
  return (
    <button type="button" data-testid={ dataTestid }>{ name }</button>
  );
}

Buttons.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Buttons;
