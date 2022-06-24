import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './ExploreDrinks.module.css';

function ExploreDrinks() {
  return (
    <div className={ styles.explore }>
      <Header title="Explore Drinks" showButton={ false } route="null" />
      <nav>

        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="btn btn-info"
          >
            By Ingredient
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

export default ExploreDrinks;
