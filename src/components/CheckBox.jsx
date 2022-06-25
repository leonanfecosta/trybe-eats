import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
    const setupStorage = {
      meals: { ...meals },
      cocktails: { ...cocktails },
    };

    // console.log(meals, cocktails);

    console.log('antes', setupStorage);

    if (type === 'meals' && target.checked) {
      setupStorage.meals[id]?.push(name);
      localStorage.setItem('favoriteRecipes', JSON.stringify(setupStorage));
    }
    if (type === 'cocktails' && target.checked) {
      setupStorage.cocktails[id]?.push(name);
      localStorage.setItem('favoriteRecipes', JSON.stringify(setupStorage));
    }
    // if (type === 'meals' && !target.checked) {
    //   const findIndexMeal = setupStorage.meals[id].indexOf(name);
    //   console.log(setupStorage.meals[id]);
    //   // setupStorage.meals[id].splice(findIndexMeal, 1);
    //   // console.log(setupStorage);
    //   localStorage.setItem('favoriteRecipes', JSON.stringify(setupStorage));
    // }
    // if (type === 'cocktails' && !target.checked) {
    //   const findIndexDrink = setupStorage.meals[id].indexOf(name);
    //   setupStorage.meals[id].splice(findIndexDrink, 1);
    //   localStorage.setItem('favoriteRecipes', JSON.stringify(setupStorage));
    // }

    console.log('depois', setupStorage);
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
        checked={ checked }
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
