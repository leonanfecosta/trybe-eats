import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';
import CardFood from '../components/cardFood';
import Buttons from '../components/Buttons';

function Drinks() {
  const { drinks,
    drinksCategories, fetchDrinksByCategory, fetchDrinks } = useContext(FoodContext);
  const NUMBER_OF_DRINKS = 12;
  const NUMBER_OF_CATEGORIES = 5;
  return (
    <div>
      <Header title="Drinks" showButton route="drink" />
      <Buttons
        name="All"
        dataTestid="All-btn"
        onClick={ fetchDrinks }
      />
      {
        drinksCategories && drinksCategories
          .slice(0, NUMBER_OF_CATEGORIES).map((categories) => (
            <Buttons
              key={ categories.strCategory }
              name={ categories.strCategory }
              dataTestid={ `${categories.strCategory}-category-filter` }
              onClick={ ({ target }) => fetchDrinksByCategory(target.name) }
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
