import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import { getFoodById } from '../services/mealApi';

function RecipeDetailsFoods(props) {
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);

  const { match: { params: { id } } } = props;

  useEffect(() => {
    getFoodById(id)
      .then((recipe) => {
        recipe.ingredients = [];
        const TWENTY = 20;
        for (let i = 1; i <= TWENTY; i += 1) {
          const ingredient = `strIngredient${i}`;
          const measure = `strMeasure${i}`;
          if (recipe[ingredient] !== '' && recipe[measure] !== '') {
            recipe.ingredients.push(`${recipe[ingredient]} - ${recipe[measure]}`);
          }
        }
        setMeal(recipe);
      });
  }, [id]);

  useEffect(() => {
    if ('idMeal' in meal) {
      setLoading(false);
    }
  }, [meal]);

  return (
    <div>
      <h2>Recipe Details</h2>
      <h4>Foods</h4>
      {loading && <h4>Loading...</h4>}
      {!loading && <RecipeDetails
        name={ meal.strMeal }
        image={ meal.strMealThumb }
        category={ meal.strCategory }
        instructions={ meal.strInstructions }
        video={ meal.strYoutube }
        ingredients={ meal.ingredients }
      />}

    </div>
  );
}

RecipeDetailsFoods.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default RecipeDetailsFoods;
