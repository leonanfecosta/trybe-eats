import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardFood.module.css';

function CardFood({ food, dataTestIdCard, dataTestIdImg, dataTestIdName }) {
  return (
    <div data-testid={ dataTestIdCard } className={ styles.cardFood }>
      <p data-testid={ dataTestIdName }>{ food.strMeal }</p>
      <img
        src={ food.strMealThumb }
        alt={ food.strMeal }
        data-testid={ dataTestIdImg }
      />
    </div>
  );
}

CardFood.propTypes = {
  food: PropTypes.objectOf(PropTypes.any).isRequired,
  dataTestIdCard: PropTypes.string.isRequired,
  dataTestIdImg: PropTypes.string.isRequired,
  dataTestIdName: PropTypes.string.isRequired,
};

export default CardFood;
