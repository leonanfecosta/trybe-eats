import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  addIngredient,
  removeIngredient,
} from '../services/helpers/handleInProgressRecipe';

function CheckBox({ name, index, type, id }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // localStorage.setItem('inProgressRecipes', JSON.stringify({
    //   meals: { 53063: ['Bread - 2'] },
    // }));
    const inProgressRecipeStorage = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || {};
    if (type === 'meals' && 'meals' in inProgressRecipeStorage) {
      setChecked(
        inProgressRecipeStorage.meals[id]?.find((ingredient) => ingredient === name),
      );
    }
    if (type === 'cocktails' && 'cocktails' in inProgressRecipeStorage) {
      setChecked(
        inProgressRecipeStorage.cocktails[id]?.find((ingredient) => ingredient === name),
      );
    }
  }, [type, name, id]);

  const handleChecked = ({ target }) => {
    setChecked(target.checked);
    const { meals, cocktails } = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || {};
    const setupStorage = { meals: { ...meals }, cocktails: { ...cocktails } };
    if (target.checked) {
      addIngredient(setupStorage, type, name, id);
    } else {
      removeIngredient(setupStorage, type, name, id);
    }
  };

  return (
    <label
      htmlFor={ index }
      data-testid={ `${index}-ingredient-step` }
      style={ checked ? { textDecoration: 'line-through' }
        : { color: 'black' } }
    >
      <input
        type="checkbox"
        name={ name }
        id={ index }
        onChange={ handleChecked }
        value={ checked }
        // checked={ checked }
      />
      { name }
    </label>
  );
}

CheckBox.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckBox;
