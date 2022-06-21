import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';
import CardFood from '../components/cardFood';
import Buttons from '../components/Buttons';

function Foods() {
  const { foods, foodsCategories, fetchFoodsByCategory } = useContext(FoodContext);
  const NUMBER_OF_FOODS = 12;
  const NUMBER_OF_CATEGORIES = 5;

  return (
    <div>
      <Header title="Foods" showButton route="food" />
      {
        foodsCategories && foodsCategories
          .slice(0, NUMBER_OF_CATEGORIES).map((categories) => (
            <Buttons
              key={ categories.strCategory }
              name={ categories.strCategory }
              dataTestid={ `${categories.strCategory}-category-filter` }
              onClick={ ({ target }) => fetchFoodsByCategory(target.name) }
            />))
      }
      { foods && foods.slice(0, NUMBER_OF_FOODS).map((food, index) => (
        <CardFood
          key={ food.idMeal }
          food={ food }
          srcImg={ food.strMealThumb }
          alt={ food.strMeal }
          name={ food.strMeal }
          dataTestIdCard={ `${index}-recipe-card` }
          dataTestIdImg={ `${index}-card-img` }
          dataTestIdName={ `${index}-card-name` }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Foods;
