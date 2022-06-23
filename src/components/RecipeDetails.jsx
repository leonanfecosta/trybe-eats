import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecomendationsCard from './RecomendationsCard';
import styles from './RecipeDetails.module.css';

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
  // const [inProgressRecipe, setInProgressRecipe] = useState(false);

  useEffect(() => {
    // localStorage.setItem('doneRecipes', JSON.stringify([{ id: '17256' }]));
    const doneRecipeStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipeStorage !== null
    && doneRecipeStorage.some((recipe) => recipe.id === id)) {
      setIsDoneRecipe(true);
    }

    // const inProgressRecipeStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    // if (inProgressRecipeStorage !== null
    //   && inProgressRecipeStorage.some((recipe) => recipe.id === id)) {
    //     setIsDoneRecipe(true);
    //   }
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
      <button data-testid="share-btn" type="button">Share</button>
      <button data-testid="favorite-btn" type="button">Favorite</button>
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
      {!isDoneRecipe && (
        <button
          data-testid="start-recipe-btn"
          type="button"
          className={ styles.buttonStartRecipe }
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
