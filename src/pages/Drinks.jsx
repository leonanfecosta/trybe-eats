import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';
import CardFood from '../components/cardFood';
import Buttons from '../components/Buttons';

function Drinks() {
  const [filter, setFilter] = useState('All');
  const [previousCategory, setPreviousCategory] = useState('');
  const {
    drinks,
    drinksCategories,
    fetchDrinksByCategory,
    fetchDrinks,
  } = useContext(FoodContext);
  const NUMBER_OF_DRINKS = 12;
  const NUMBER_OF_CATEGORIES = 5;

  useEffect(() => {
    const handleCategory = () => {
      if (filter !== 'All') {
        fetchDrinksByCategory(filter);
      }
      if (filter === 'All' || filter === previousCategory) {
        fetchDrinks();
      }
    };
    handleCategory();
  }, [filter, fetchDrinksByCategory, fetchDrinks, previousCategory]);

  const handleFilter = (name) => {
    if (name !== filter) {
      setFilter(name);
    }
    if (name === filter) {
      setPreviousCategory(name);
      setFilter('All');
    }
  };

  return (
    <div>
      <Header title="Drinks" showButton route="drink" />
      <Buttons
        name="All"
        dataTestid="All-category-filter"
        onClick={ fetchDrinks }
      />
      {drinksCategories
        && drinksCategories
          .slice(0, NUMBER_OF_CATEGORIES)
          .map((categories) => (
            <Buttons
              key={ categories.strCategory }
              name={ categories.strCategory }
              dataTestid={ `${categories.strCategory}-category-filter` }
              onClick={ ({ target }) => handleFilter(target.name) }
            />
          ))}
      {drinks
        && drinks
          .slice(0, NUMBER_OF_DRINKS)
          .map((drink, index) => (
            <CardFood
              key={ drink.idDrink }
              id={ drink.idDrink }
              srcImg={ drink.strDrinkThumb }
              alt={ drink.strDrink }
              name={ drink.strDrink }
              dataTestIdCard={ `${index}-recipe-card` }
              dataTestIdImg={ `${index}-card-img` }
              dataTestIdName={ `${index}-card-name` }
              route="drink"
            />
          ))}
      <Footer />
    </div>
  );
}

export default Drinks;
