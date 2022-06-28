import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const BUTTON_FILTER_ALL = 'filter-by-all-btn';
const BUTTON_FILTER_FOOD = 'filter-by-food-btn';
const BUTTON_FILTER_DRINK = 'filter-by-drink-btn';

const ARRAY_FILTERS_BUTTONS = [
  BUTTON_FILTER_ALL,
  BUTTON_FILTER_FOOD,
  BUTTON_FILTER_DRINK,
];

const favoriteRecipes = [
  {
    id: '52771',
    type: 'food',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

describe('teste do FavoriteRecipe', () => {
  it('avalia a renderização dos elementos a partir do App', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorite-recipes');

    expect(screen.getByText(/Favorite Recipes/i)).toBeInTheDocument();
    ARRAY_FILTERS_BUTTONS.forEach((dataTest) => {
      expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    });
  });

  it('avalia a renderização das receitas favoritadas', async () => {
    const { history, debug } = renderWithRouter(<App />);

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

    // console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));

    history.push('/favorite-recipes');

    // console.log(favoriteRecipes[0].name);
    debug();
    await waitForElement(() => expect(screen
      .getByTestId('0-horizontal-image')).toBeInTheDocument());
    // expect(screen.getByTestId('0-horizontal-image')).toBeInTheDocument();
  });
});
