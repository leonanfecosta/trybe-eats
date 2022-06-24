import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './ExploreFoods.module.css';

function ExploreFoods() {
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
        <Link to="/">
          <button
            type="button"
            data-testid="explore-surprise"
            className="btn btn-info"
          >
            Surprise me!

          </button>
        </Link>
      </nav>
      <Footer />
    </div>
  );
}
// Adicionar a rota para o 'Surprise me!'

export default ExploreFoods;
