import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InProgressDetails from '../components/InProgressDetails';
import { getFoodById } from '../services/mealApi';

function InProgressRecipeFoods(props) {
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
          if (recipe[ingredient] !== ''
          && recipe[measure] !== ''
          && recipe[ingredient] !== null
          && recipe[measure] !== null
          && recipe[ingredient] !== undefined
          && recipe[measure] !== undefined) {
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
    <div style={ { width: '100%' } }>
      <h3
        style={ {
          textAlign: 'center',
          width: '80%',
          marginInline: 'auto' } }
      >
        In Progress Recipe
      </h3>
      {loading && (
        <h4
          style={ { textAlign: 'center', marginTop: '100px' } }
        >
          Loading...
        </h4>
      )}
      {!loading && <InProgressDetails
        name={ meal.strMeal }
        image={ meal.strMealThumb }
        category={ meal.strCategory }
        instructions={ meal.strInstructions }
        ingredients={ meal.ingredients }
        id={ id }
        isMeal
        nationality={ meal.strArea }
        alcoholicOrNot=""
      />}
    </div>
  );
}

InProgressRecipeFoods.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default InProgressRecipeFoods;