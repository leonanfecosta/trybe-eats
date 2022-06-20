import React from 'react';
import { Link } from 'react-router-dom';

function ExploreDrinks() {
  return (
    <div>
      <h2>Explore Drinks</h2>
      <Link to="/explore/drinks/ingredients">
        <button type="button" data-testid="explore-by-ingredient">By Ingredient</button>
      </Link>
      <Link to="/">
        <button type="button" data-testid="explore-surprise">Surprise me!</button>
      </Link>
    </div>
  );
}
// Adicionar a rota para o 'Surprise me!'

export default ExploreDrinks;
