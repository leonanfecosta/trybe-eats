import React, { useState, useEffect } from 'react';
import RecipeDetailsFavorite from '../components/RecipeDetailsFavorite';
import Header from '../components/Header';
import Buttons from '../components/Buttons';

function FavoriteRecipes() {
  const [favorite, setFavorite] = useState([]);
  const [favoriteBackup, setFavoriteBackup] = useState(true);

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorite(favoriteStorage);
    setFavoriteBackup(favoriteStorage);
  }, [setFavorite]);

  return (
    <div>
      <Header title="Favorite Recipes" showButton={ false } route="null" />
      <nav>
        <Buttons
          name="All"
          dataTestid="filter-by-all-btn"
          onClick={ () => setFavorite(favoriteBackup) }
          className="btn btn-primary"
        />
        <Buttons
          name="Food"
          dataTestid="filter-by-food-btn"
          onClick={ () => setFavorite(favorite
            .filter(({ type }) => type === 'food')) }
          className="btn btn-info"
        />
        <Buttons
          name="Drink"
          dataTestid="filter-by-drink-btn"
          onClick={ () => setFavorite(favorite
            .filter(({ type }) => type === 'drink')) }
          className="btn btn-info"
        />
      </nav>
      {favorite?.map((recipe, index) => (<RecipeDetailsFavorite
        key={ recipe.id }
        id={ recipe.id }
        type={ recipe.type }
        nationality={ recipe.nationality }
        category={ recipe.category }
        alcoholicOrNot={ recipe.alcoholicOrNot }
        name={ recipe.name }
        image={ recipe.image }
        index={ index }
        setFavorite={ setFavorite }
      />))}
    </div>
  );
}

export default FavoriteRecipes;
