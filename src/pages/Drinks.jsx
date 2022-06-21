import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';

function Drinks() {
  const { drinks } = useContext(FoodContext);
  const NUMBER_OF_DRINKS = 12;
  return (
    <div>
      <Header title="Drinks" showButton route="drink" />
      { drinks.slice(0, NUMBER_OF_DRINKS).map((drink) => (
        <div key={ drink.idDrink }>
          <h3>{ drink.strDrink }</h3>
          <img src={ drink.strDrinkThumb } alt={ drink.strDrink } />
        </div>
      )) }
      <Footer />
    </div>
  );
}

export default Drinks;
