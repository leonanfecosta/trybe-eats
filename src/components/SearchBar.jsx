import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputRadio from './InputRadio';
import {
  getFoodFromIngredient,
  getFoodFromName,
  getFoodFromFirstLetter,
} from '../services/foodApi';
import FoodContext from '../context/FoodContext';

function SearchBar() {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('name');
  const { setFood, setDrink, route } = useContext(FoodContext);

  const verifyFood = (food) => {
    if (food && food.length === 1) {
      history.push(`/foods$/${food[0].idMeal}`);
    }
  };

  const verifyDrink = (drink) => {
    if (drink.length === 1) {
      history.push(`/drinks$/${drink[0].idDrink}`);
    }
  };

  const handleSetFood = async (event) => {
    event.preventDefault();
    switch (searchType) {
    case 'ingredientSearch':
      if (route === 'food') {
        const food = await getFoodFromIngredient(searchInput);
        verifyFood(food);
        return setFood(food);
      }
      if (route === 'drink') {
        const drink = await getFoodFromIngredient(searchInput);
        return setDrink(drink);
      }
      break;
    case 'nameSearch':
      if (route === 'food') {
        const food = await getFoodFromName(searchInput);
        verifyFood(food);
        return setFood(food);
      }
      if (route === 'drink') {
        const drink = await getFoodFromName(searchInput);
        verifyDrink(drink);
        return setDrink(drink);
      }
      break;
    case 'firstLetterSearch':
      if (searchInput.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      if (route === 'food') {
        const food = await getFoodFromFirstLetter(searchInput);
        verifyFood(food);
        return setFood(food);
      }
      if (route === 'drink') {
        const drink = await getFoodFromFirstLetter(searchInput);
        verifyDrink(drink);
        return setDrink(drink);
      }
      break;
    default:
      return true;
    }
  };

  return (
    <form>
      <p>{console.log(route)}</p>
      <input
        type="text"
        placeholder="Search Recipes"
        name="search-input"
        value={ searchInput }
        onChange={ ({ target }) => setSearchInput(target.value) }
      />

      <InputRadio
        dataTestid="ingredient-search-radio"
        id="ingredient-search-radio"
        name="search-radio"
        value="ingredientSearch"
        labelContent="Ingredient"
        onClick={ ({ target }) => setSearchType(target.value) }
      />

      <InputRadio
        dataTestid="name-search-radio"
        id="name-search-radio"
        name="search-radio"
        value="nameSearch"
        labelContent="Name"
        onClick={ ({ target }) => setSearchType(target.value) }
      />

      <InputRadio
        dataTestid="first-letter-search-radio"
        id="first-letter-search-radio"
        name="search-radio"
        value="firstLetterSearch"
        labelContent="First Letter"
        onClick={ ({ target }) => setSearchType(target.value) }
      />

      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ handleSetFood }
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
