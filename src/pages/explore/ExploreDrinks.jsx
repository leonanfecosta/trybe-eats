import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" />
      <Link to="/explore/drinks/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="explore-surprise">Surprise me!</button>
      </Link>
      <Footer />
    </div>
  );
}
// Adicionar a rota para o 'Surprise me!'

export default ExploreDrinks;
