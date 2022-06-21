import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodContext from '../context/FoodContext';
import CardFood from '../components/cardFood';

function Drinks() {
  const { drinks } = useContext(FoodContext);
  const NUMBER_OF_DRINKS = 12;
  return (
    <div>
      <Header title="Drinks" showButton route="drink" />
      { drinks && drinks.slice(0, NUMBER_OF_DRINKS).map((drink, index) => (
        <CardFood
          key={ drink.idDrink }
          food={ drink }
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
