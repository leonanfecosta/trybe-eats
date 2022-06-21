import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { getMeals, getMealsCategories } from '../services/mealApi';
import { getDrinks, getDrinksCategories } from '../services/drinkApi';

function FoodProvider({ children }) {
  const [foods, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [route, setRoute] = useState('food');
  const [foodsCategories, setFoodCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);

  const fetchMeals = async () => {
    const meals = await getMeals();
    setFood(meals);
  };

  const fetchDrinks = async () => {
    const drinksData = await getDrinks();
    setDrinks(drinksData);
  };

  const fetchDrinksCategories = async () => {
    const drinksCategoriesData = await getDrinksCategories();
    setDrinksCategories(drinksCategoriesData);
  };

  const fetchFoodsCategories = async () => {
    const foodsCategoriesData = await getMealsCategories();
    setFoodCategories(foodsCategoriesData);
  };

  useEffect(() => {
    fetchMeals();
    fetchDrinks();
    fetchFoodsCategories();
    fetchDrinksCategories();
  }, []);

  const contextValue = {
    foods,
    setFood,
    drinks,
    setDrinks,
    route,
    setRoute,
    foodsCategories,
    drinksCategories,
  };

  return (
    <FoodContext.Provider value={ contextValue }>
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
