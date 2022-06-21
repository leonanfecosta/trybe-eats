import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetails({ name, image, category, ingredients, instructions, video }) {
  return (
    <div>
      <img data-testid="recipe-photo" src={ image } alt={ name } />
      <h4 data-testid="recipe-title">{ name }</h4>
      <button data-testid="share-btn" type="button">Share</button>
      <button data-testid="favorite-btn" type="button">Favorite</button>
      <p data-testid="recipe-category">{ category }</p>
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
      <iframe
        width="420"
        height="315"
        src={ `https://www.youtube.com/embed/${video.split('=')[1]}` }
        title={ name }
      />
      {/* {recomendation.map((recipe, index) => (
        <p key={ index } data-testid={ `${index}-recomendation-card` }>
          {JSON.stringify(recipe)}
        </p>
      ))} */}
      <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
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
};

export default RecipeDetails;
