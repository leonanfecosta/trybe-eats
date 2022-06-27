import React, { useState, useEffect } from 'react';
import RecipeDetailsFavorite from '../components/RecipeDetailsFavorite';
import Header from '../components/Header';
import Buttons from '../components/Buttons';

function FavoriteRecipes() {
  const [favorite, setFavorite] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoriteRecipeStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorite(favoriteRecipeStorage);
  }, [setFavorite]);

  return (
    <div>
      <Header title="Favorite Recipes" showButton={ false } route="null" />
      {/* {loading && (
        <h4
          style={ { textAlign: 'center', marginTop: '100px' } }
        >
          Loading...
        </h4>
      )} */}
      <nav>
        <Buttons
          name="All"
          dataTestid="filter-by-all-btn"
          onClick={ () => console.log('all') }
          className="btn btn-primary"
        />
        <Buttons
          name="Food"
          dataTestid="filter-by-food-btn"
          onClick={ () => console.log('food') }
          className="btn btn-info"
        />
        <Buttons
          name="Drink"
          dataTestid="filter-by-drink-btn"
          onClick={ () => console.log('drink') }
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
