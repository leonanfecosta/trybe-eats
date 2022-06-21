import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';
import { getMeals } from '../services/mealApi';
import { getDrinks } from '../services/drinkApi';

function FoodProvider({ children }) {
  const [foods, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [route, setRoute] = useState('food');

  const fetchMeals = async () => {
    const meals = await getMeals();
    setFood(meals);
  };

  const fetchDrinks = async () => {
    const drinksData = await getDrinks();
    setDrinks(drinksData);
  };

  useEffect(() => {
    fetchMeals();
    fetchDrinks();
  }, []);

  const contextValue = {
    foods,
    setFood,
    drinks,
    setDrinks,
    route,
    setRoute,
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
