import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreDrinksIngredients.module.css';
import { getIngredients } from '../../services/drinkApi';

function ExploreDrinksIngredients() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getIngredients().then((recipe) => {
      const array = [];
      const twelve = 12;
      for (let i = 0; i < twelve; i += 1) {
        array.push(recipe[i].strIngredient1);
      }
      setDrinks(array);
    });
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" showButton={ false } route="null" />
      {drinks.map((e, index) => (
        <div
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          className={ styles.exploreDrinksIngredients }
        >
          <p data-testid={ `${index}-card-name` }>{ e }</p>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.thecocktaildb.com/images/ingredients/${e}-Small.png` }
            alt={ e }
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
