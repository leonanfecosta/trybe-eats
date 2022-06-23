import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import RecomendationsCard from './RecomendationsCard';
import styles from './RecipeDetails.module.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeDetails({
  name,
  image,
  category,
  ingredients,
  instructions,
  video,
  isMeal,
  recomendation,
  id,
}) {
  const [isDoneRecipe, setIsDoneRecipe] = useState(false);
  const [inProgressRecipe, setInProgressRecipe] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);
  const [wasCopied, setWasCopied] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // localStorage.setItem('inProgressRecipes', JSON.stringify({
    //   cocktails: { 17256: [{ id: '17256' }] },
    //   meals: { 52882: [{ id: '52882' }] },
    // }));
    const inProgressRecipeStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipeStorage !== null
      && `${id}` in {
        ...inProgressRecipeStorage.cocktails,
        ...inProgressRecipeStorage.meals,
      }) {
      setInProgressRecipe(true);
    }

    // localStorage.setItem('doneRecipes', JSON.stringify([{ id: '17256' }]));
    const doneRecipeStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipeStorage !== null
    && doneRecipeStorage.some((recipe) => recipe.id === id)) {
      setIsDoneRecipe(true);
    }
  }, [id]);

  return (
    <div className={ styles.recipeDetails }>
      <img
        data-testid="recipe-photo"
        src={ image }
        alt={ name }
        className={ styles.recipeImage }
      />
      <h4 data-testid="recipe-title">{ name }</h4>
      <p data-testid="recipe-category">{ category }</p>

      <input
        type="image"
        data-testid="favorite-btn"
        // onClick={}
        src={ whiteHeartIcon }
        // src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="shareIcon"
      />

      <input
        type="image"
        data-testid="share-btn"
        onClick={ () => {
          console.log(history);
          copy(`http://localhost:3000${history.location.pathname}`);
          setWasCopied(true);
        } }
        src={ shareIcon }
        alt="shareIcon"
      />
      {wasCopied && <p>Link copied!</p>}

      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {ingredient}
          </li>
        ))}
      </ul>
      <p data-testid="instructions">{ instructions }</p>

      {/* Resolução proveniente da thread da turma 20 tribo A -
      https://trybecourse.slack.com/archives/C02T5FNGN07/p1655841646592859 */}
      {isMeal && <iframe
        width="420"
        height="315"
        src={ `https://www.youtube.com/embed/${video.split('=')[1]}` }
        title={ name }
        data-testid="video"
      />}
      <aside>
        {recomendation.map((recipe, index) => {
          let keyRecipe = 'strMeal';
          if (isMeal) {
            keyRecipe = 'strDrink';
          }
          return (<RecomendationsCard
            key={ index }
            index={ index }
            food={ recipe }
            srcImg={ recipe[`${keyRecipe}Thumb`] }
            alt={ recipe[keyRecipe] }
            name={ recipe[keyRecipe] }

          />);
        })}
      </aside>
      {(!isDoneRecipe && inProgressRecipe) && (
        <button
          data-testid="start-recipe-btn"
          type="button"
          className={ styles.buttonContinueRecipe }
        >
          Continue Recipe
        </button>
      )}
      {(!isDoneRecipe && !inProgressRecipe) && (
        <button
          data-testid="start-recipe-btn"
          type="button"
          className={ styles.buttonStartRecipe }
          onClick={ () => {
            if (isMeal) {
              history.push(`/foods/${id}/in-progress`);
            } else {
              history.push(`/drinks/${id}/in-progress`);
            }
          } }
        >
          Start Recipe
        </button>
      )}
    </div>
  );
}

RecipeDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMeal: PropTypes.bool.isRequired,
  recomendation: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
