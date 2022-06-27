import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreFoodsIngredients.module.css';

function ExploreFoodsIngredients() {
  return (
    <div className={ styles.exploreFoodsIngredients }>
      <Header title="Explore Ingredients" showButton={ false } route="null" />
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
