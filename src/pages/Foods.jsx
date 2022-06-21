import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';
import CardFood from '../components/cardFood';

function Foods() {
  const { foods } = useContext(FoodContext);
  const NUMBER_OF_FOODS = 12;
  return (
    <div>
      <Header title="Foods" showButton route="food" />
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
