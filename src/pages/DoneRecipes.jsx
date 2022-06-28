import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import { Link, useHistory } from 'react-router-dom';

function DoneRecipes() {
  const [completedRecipes, setCompletedRecipes] = useState([]);
  const [wasCopied, setWasCopied] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    setCompletedRecipes(recipes);
  }, []);

  const handleAllFilter = () => {
    setCompletedRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
  }

  const handleFoodFilter = () => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const filteredRecipes = recipes.filter((recipe) => recipe.type === 'food');
    setCompletedRecipes(filteredRecipes);
  }

  const handleDrinkFilter = () => {
    const recipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const filteredRecipes = recipes.filter((recipe) => recipe.type === 'drink');
    setCompletedRecipes(filteredRecipes);
  }
  return (
    <div>
      <Header title="Done Recipes" showButton={ false } route="null" />
      <nav>
        <Buttons
          dataTestid="filter-by-all-btn"
          name="All"
          onClick={ handleAllFilter }
          className="btn btn-primary"
        />
        <Buttons
          dataTestid="filter-by-food-btn"
          name="Food"
          onClick={ handleFoodFilter }
          className="btn btn-info"
        />
        <Buttons
          dataTestid="filter-by-drink-btn"
          name="Drink"
          onClick={ handleDrinkFilter }
          className="btn btn-info"
        />
      </nav>
      {completedRecipes?.map((recipe, index) => (
        <div key={ index }>
          <Link to={`${recipe.type}s/${recipe.id}`}>
            <img
              src={ recipe.image }
              alt={ recipe.name }
              style={ { width: '70%' } }
              data-testid={`${index}-horizontal-image`}
            />
          </Link>
          <Link to={`${recipe.type}s/${recipe.id}`}>
            <h3 
              data-testid={`${index}-horizontal-name`}
            >
              {recipe.name}
            </h3>
          </Link>

          <p data-testid={`${index}-horizontal-done-date`}>
            {recipe.doneDate}
          </p>

          {recipe.type === 'food' && (
            <p
              data-testid={`${index}-horizontal-top-text`}
            >
              {`${recipe.nationality} - ${recipe.category}`}
            </p>
          )
          }

          {recipe.type === 'drink' && (
            <p
              data-testid={`${index}-horizontal-top-text`}
            >
              {recipe.alcoholicOrNot}
            </p>
            )
          }

          {recipe.type === 'food' && recipe.tags?.map((tag) => (
            <p
              key={ index }
              data-testid={`${index}-${tag}-horizontal-tag`}
            >
              {tag}
            </p>
          ))}

          <input
          type="image"
          data-testid={`${index}-horizontal-share-btn`}
          onClick={ () => {
            copy(`http://localhost:3000/${recipe.type}s/${recipe.id}`);
            setWasCopied(true);
          } }
          src={ shareIcon }
          alt="shareIcon"
        />
         {wasCopied && <p data-testid={`${index}-horizontal-share-btn`}>Link copied!</p>}

        </div>
      ))}
    </div>
  );
}

export default DoneRecipes;
