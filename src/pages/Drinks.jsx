import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';
import CardFood from '../components/cardFood';
import Buttons from '../components/Buttons';

function Drinks() {
  const [filter, setFilter] = useState(true);
  const { drinks,
    drinksCategories, fetchDrinksByCategory, fetchDrinks } = useContext(FoodContext);
  const NUMBER_OF_DRINKS = 12;
  const NUMBER_OF_CATEGORIES = 5;

  const handleFilter = (name) => {
    setFilter(!filter);
    if (filter) {
      return fetchDrinksByCategory(name);
    }
    return fetchDrinks();
  };

  return (
    <div>
      <Header title="Drinks" showButton route="drink" />
      {
        drinksCategories && drinksCategories
          .slice(0, NUMBER_OF_CATEGORIES).map((categories) => (
            <Buttons
              key={ categories.strCategory }
              name={ categories.strCategory }
              dataTestid={ `${categories.strCategory}-category-filter` }
              onClick={ ({ target }) => handleFilter(target.name) }
            />))

      }
      { drinks && drinks.slice(0, NUMBER_OF_DRINKS).map((drink, index) => (
        <CardFood
          key={ drink.idDrink }
          food={ drink }
          srcImg={ drink.strDrinkThumb }
          alt={ drink.strDrink }
          name={ drink.strDrink }
          dataTestIdCard={ `${index}-recipe-card` }
          dataTestIdImg={ `${index}-card-img` }
          dataTestIdName={ `${index}-card-name` }
        />
      )) }
      <Footer />
    </div>
  );
}

export default Drinks;
