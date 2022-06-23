import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import { getDrinkById } from '../services/drinkApi';
import { getFoodRecommendations } from '../services/mealApi';

function RecipeDetailsDrinks(props) {
  const [drink, setDrink] = useState({});
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const { match: { params: { id } } } = props;

  useEffect(() => {
    getDrinkById(id)
      .then((recipe) => {
        recipe.ingredients = [];
        const TWENTY = 15;
        for (let i = 1; i <= TWENTY; i += 1) {
          const ingredient = `strIngredient${i}`;
          const measure = `strMeasure${i}`;
          if (recipe[ingredient] !== ''
          && recipe[measure] !== ''
          && recipe[ingredient] !== null
          && recipe[measure] !== null) {
            recipe.ingredients.push(`${recipe[ingredient]} - ${recipe[measure]}`);
          }
        }
        setDrink(recipe);
      });
    getFoodRecommendations().then((response) => {
      const TOTAL_RECOMENDATIONS = 6;
      const responseFilter = response.filter((_, index) => index < TOTAL_RECOMENDATIONS);
      setMeals(responseFilter);
    });
  }, [id]);

  useEffect(() => {
    if ('idDrink' in drink) {
      setLoading(false);
    }
  }, [drink]);

  return (
    <div>
      <h2>Recipe Details</h2>
      <h4>Drinks</h4>
      {loading && <h4>Loading...</h4>}
      {!loading && <RecipeDetails
        name={ drink.strDrink }
        image={ drink.strDrinkThumb }
        category={ drink.strAlcoholic }
        instructions={ drink.strInstructions }
        video="null"
        ingredients={ drink.ingredients }
        isMeal={ false }
        recomendation={ meals }
      />}

    </div>
  );
}

RecipeDetailsDrinks.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default RecipeDetailsDrinks;
