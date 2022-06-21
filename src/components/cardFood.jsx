import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardFood.module.css';

function CardFood({ dataTestIdCard, dataTestIdImg, dataTestIdName, srcImg, alt, name }) {
  return (
    <div data-testid={ dataTestIdCard } className={ styles.cardFood }>
      <p data-testid={ dataTestIdName }>{ name }</p>
      <img
        src={ srcImg }
        alt={ alt }
        data-testid={ dataTestIdImg }
      />
    </div>
  );
}

CardFood.propTypes = {
  dataTestIdCard: PropTypes.string.isRequired,
  dataTestIdImg: PropTypes.string.isRequired,
  dataTestIdName: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardFood;
