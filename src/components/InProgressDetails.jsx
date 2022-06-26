import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import CheckBox from './CheckBox';
import localStorageValid from '../services/helpers/localStorageValid';
import setFavoriteLocalStorage from '../services/helpers/setFavoriteLocalStorage';

function InProgressDetails({
  name,
  image,
  category,
  instructions,
  ingredients,
  id,
  isMeal,
  nationality,
  alcoholicOrNot,
}) {
  const { meals } = JSON
    .parse(localStorage.getItem('inProgressRecipes')) || [];
  const [isFavorite, setIsFavorite] = useState(false);
  const [wasCopied, setWasCopied] = useState(false);
  // const [showButton, setShowButton] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const favoriteRecipeStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setIsFavorite(favoriteRecipeStorage?.some((recipe) => recipe.id === id));
  }, [id]);

  // useEffect(() => {
  //   const { meals, cocktails } = JSON
  //     .parse(localStorage.getItem('inProgressRecipes')) || {};
  //   const storage = { meals: { ...meals }, cocktails: { ...cocktails } };
  //   if (isMeal) {
  //     setShowButton(storage.meals[id].lenght === ingredients.lenght);
  //   } else {
  //     setShowButton(storage.cocktails[id].lenght === ingredients.lenght);
  //   }
  // }, [isMeal, id, setShowButton, ingredients]);

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
          onClick={ () => {
            const arrayHistory = history.location.pathname.split('/');
            copy(`http://localhost:3000/${arrayHistory[1]}/${arrayHistory[2]}`);
            setWasCopied(true);
          } }
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
            type={ isMeal === true ? 'meals' : 'cocktails' }
            id={ id }
          />

        ))}
      </ul>
      <article data-testid="instructions">{ instructions }</article>
      {/* {showButton && (
        <button
          data-testid="finish-recipe-btn"
          type="button"
          onClick={ () => history.push('/done-recipes') }
        >
          Finish Recipe
        </button>
      )} */}
      <button
        data-testid="finish-recipe-btn"
        type="button"
        onClick={ () => history.push('/done-recipes') }
        disabled={ isMeal && meals[id].length !== ingredients.length }
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
  isMeal: PropTypes.bool.isRequired,
  nationality: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
};

export default InProgressDetails;
