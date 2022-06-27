import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreFoods.module.css';
import { getRandomMeal } from '../../services/mealApi';

function ExploreFoods() {
  const history = useHistory();
  return (
    <div className={ styles.explore }>
      <Header title="Explore Foods" showButton={ false } route="null" />
      <nav>
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="btn btn-info"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
            className="btn btn-info"
          >
            By Nationality
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          className="btn btn-info"
          onClick={ async () => {
            const { idMeal } = await getRandomMeal();
            history.push(`/foods/${idMeal}`);
          } }
        >
          Surprise me!
        </button>
      </nav>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
