import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ name, dataTestid, onClick }) {
  return (
    <button type="button" data-testid={ dataTestid } onClick={ onClick } name={ name }>
      {name}
    </button>
  );
}

Buttons.propTypes = {
  dataTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
