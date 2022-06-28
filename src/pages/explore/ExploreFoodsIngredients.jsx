import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreFoodsIngredients.module.css';
import { getIngredients, getFoodByIngredient } from '../../services/mealApi';

function ExploreFoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients().then((recipe) => {
      const array = [];
      const twelve = 12;
      for (let i = 0; i < twelve; i += 1) {
        array.push(recipe[i].strIngredient);
      }
      setIngredients(array);
    });
  }, []);

  const recipesWithIngredient = (ingredient) => {
    getFoodByIngredient(ingredient).then((recipe) => console.log(recipe));
  };
  recipesWithIngredient('Chicken');

  return (
    <div>
      <Header title="Explore Ingredients" showButton={ false } route="null" />
      {ingredients.map((e, index) => (
        <div
          key={ index }
          data-testid={ `${index}-ingredient-card` }
          className={ styles.exploreFoodsIngredients }
        >
          <p data-testid={ `${index}-card-name` }>{ e }</p>
          <img
            data-testid={ `${index}-card-img` }
            src={ `https://www.themealdb.com/images/ingredients/${e}-Small.png` }
            alt={ e }
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
