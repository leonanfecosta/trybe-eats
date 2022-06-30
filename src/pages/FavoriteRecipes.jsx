import React, { useState, useEffect } from 'react';
import RecipeDetailsFavorite from '../components/RecipeDetailsFavorite';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import styles from '../styles/FavoriteRecipes.module.css';

function FavoriteRecipes() {
  const [favorite, setFavorite] = useState([]);
  const [favoriteBackup, setFavoriteBackup] = useState(true);

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavorite(favoriteStorage);
    setFavoriteBackup(favoriteStorage);
  }, [setFavorite]);

  return (
    <div className={ styles.favoriteRecipes }>
      <Header title="Favorite Recipes" showButton={ false } route="null" />
      <nav>
        <Buttons
          name="All"
          dataTestid="filter-by-all-btn"
          onClick={ () => setFavorite(favoriteBackup) }
          className={ styles.allButton }
        />
        <Buttons
          name="Food"
          dataTestid="filter-by-food-btn"
          onClick={ () => setFavorite(favorite
            .filter(({ type }) => type === 'food')) }
          className={ styles.button }
        />
        <Buttons
          name="Drink"
          dataTestid="filter-by-drink-btn"
          onClick={ () => setFavorite(favorite
            .filter(({ type }) => type === 'drink')) }
          className={ styles.button }
        />
      </nav>
      <main>
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
      </main>
    </div>
  );
}

export default FavoriteRecipes;
