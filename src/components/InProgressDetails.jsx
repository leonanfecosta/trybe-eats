import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CheckBox from './CheckBox';
import localStorageValid from '../services/helpers/localStorageValid';

function InProgressDetails({ name, image, category, instructions, ingredients, id }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wasCopied, setWasCopied] = useState(false);
  const history = useHistory();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    const storage = localStorageValid('favoriteRecipes');
    const favorite = {
      id,
      type: isMeal === true ? 'food' : 'drink',
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
    };
    setFavoriteLocalStorage(isFavorite, favorite, storage, id);
    console.log(setWasCopied());
  };

  return (
    <div>
      <div>
        <img
          data-testid="recipe-photo"
          src={ image }
          alt={ name }
        />
      </div>
      <h3 data-testid="recipe-title">{ name }</h3>
      <p data-testid="recipe-category">{ category }</p>

      <div>
        <input
          type="image"
          data-testid="favorite-btn"
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="shareIcon"
          onClick={ handleFavorite }
        />

        <input
          type="image"
          src={ shareIcon }
          alt="shareIcon"
          data-testid="share-btn"
          // onClick={ () => {
          //   copy(`http://localhost:3000${history.location.pathname}`);
          //   setWasCopied(true);
          // } }
        />
      </div>
      {wasCopied && <p>Link copied!</p>}

      <h4>Ingredients</h4>
      <ul>
        {ingredients?.map((ingredient, index) => (
          <CheckBox
            key={ index }
            name={ ingredient }
            index={ index }
            type="meals"
            id={ id }
          />

        ))}
      </ul>
      <article data-testid="instructions">{ instructions }</article>

      <button
        data-testid="finish-recipe-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}

InProgressDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default InProgressDetails;
