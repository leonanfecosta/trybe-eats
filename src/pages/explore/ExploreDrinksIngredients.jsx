import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreDrinksIngredients.module.css';

function ExploreDrinksIngredients() {
  return (
    <div className={ styles.exploreDrinksIngredients }>
      <Header title="Explore Ingredients" showButton={ false } route="null" />
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
