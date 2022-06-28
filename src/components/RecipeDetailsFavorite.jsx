import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import localStorageValid from '../services/helpers/localStorageValid';
import setFavoriteLocalStorage from '../services/helpers/setFavoriteLocalStorage';
import styles from '../styles/RecipeDetailsFavorite.module.css';

function RecipeDetails({
  id,
  type,
  nationality,
  category,
  alcoholicOrNot,
  name,
  image,
  index,
  setFavorite,
}) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [wasCopied, setWasCopied] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const storage = localStorageValid('favoriteRecipes');
    const favorite = {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
    };
    setFavoriteLocalStorage(isFavorite, favorite, storage, id);
  };

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [isFavorite, setFavorite]);

  return (
    <section className={ styles.recipesFavorites }>
      <Link to={ `/${type}s/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          className={ styles.recipesFavoritesImage }
        />
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        { type === 'food' ? `${nationality} - ${category}` : alcoholicOrNot }
      </p>

      <Link to={ `/${type}s/${id}` }>
        <h4 data-testid={ `${index}-horizontal-name` }>{ name }</h4>
      </Link>

      <div>
        <input
          type="image"
          data-testid={ `${index}-horizontal-favorite-btn` }
          onClick={ handleFavorite }
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="shareIcon"
        />

        <input
          type="image"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => {
            copy(`http://localhost:3000/${type}s/${id}`);
            setWasCopied(true);
          } }
          src={ shareIcon }
          alt="shareIcon"
        />
      </div>
      {wasCopied && <p>Link copied!</p>}
    </section>
  );
}

RecipeDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

export default RecipeDetails;
