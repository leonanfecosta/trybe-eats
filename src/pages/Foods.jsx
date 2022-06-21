import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';

function Foods() {
  const { foods } = useContext(FoodContext);
  const NUMBER_OF_FOODS = 12;
  return (
    <div>
      <Header title="Foods" showButton route="food" />
      { foods.slice(0, NUMBER_OF_FOODS).map((food) => (
        <div key={ food.idMeal }>
          <h3>{ food.strMeal }</h3>
          <img src={ food.strMealThumb } alt={ food.strMeal } />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Foods;
