import React from 'react';
import {
  screen,
  waitForElement,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import URLS from './mocks/urls';
import drinks from './mocks/drinks';

const DRINKS_PATH = '/drinks';
const NUMBER_OF_CATEGORIES = 5;
const NUMBER_OF_MEALS = 12;

const DEFAULT_RECIPES_DRINKS = drinks.drinks.map(({ strDrink }) => strDrink);

expect.extend({
  validURL: (received, validator) => {
    if (validator[received]) return { message: () => 'URL mockada', pass: true };
    return { message: () => 'URL não mockada', pass: false };
  },
});

describe('teste da tela de Drinks', () => {
  it('deve renderizar a tela de Drinks com os componentes certos', async () => {
    const fetchMock = jest
      .spyOn(global, 'fetch').mockImplementation(async (URL) => (
        { json: async () => URLS[URL] || expect(URL).validURL(URLS) }
      ));
    const { history } = renderWithRouter(<App />);
    expect(fetchMock).toBeCalled();
    history.push(DRINKS_PATH);

    await waitForElement(() => screen.getByText(DEFAULT_RECIPES_DRINKS[0]));
  });
});
