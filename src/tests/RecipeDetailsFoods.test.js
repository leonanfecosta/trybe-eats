import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import meals from './mocks/meals';
import drinks from './mocks/drinks';
import mealsCategories from './mocks/mealsCategories';
import drinksCategories from './mocks/drinksCategories';

const VALID_EMAIL = 'teste@teste.com';
const VALID_PASSWORD = 'teste1234';

const INPUT_EMAIL = 'email-input';
const INPUT_PASSWORD = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

const URLS = {
  'https://www.themealdb.com/api/json/v1/1/search.php?s=': meals,
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=': drinks,
  'https://www.themealdb.com/api/json/v1/1/list.php?c=list': mealsCategories,
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list': drinksCategories,
};

// Criação de messagem customizada no Jest criada durante a monitoria com o instrutor
// Especialista Zambelli durante a monitoria, baseado nos links (do Stack OverFlow e Documentação):
// (1) https://stackoverflow.com/questions/45348083/how-to-add-custom-message-to-jest-expect
// e (2) https://jestjs.io/docs/expect#expectextendmatchers
expect.extend({
  validURL: (received, validator) => {
    if (validator[received]) return { message: () => 'URL mockada', pass: true };
    return { message: () => 'URL não mockada', pass: false };
  },
});

describe('teste do FavoriteDetailsFoods', () => {
  it('avalia a renderização correta dos elementos da página', async () => {
    // Criação de um mock genérico com a utilização de Object Literals proveniente
    // da monitoria com o instrutor Especialista Zambelli durante a monitoria
    const fetchMock = jest
      .spyOn(global, 'fetch').mockImplementation(async (URL) => (
        { json: async () => URLS[URL] || expect(URL).validURL(URLS) }
      ));

    const { debug } = renderWithRouter(<App />);

    userEvent.type(screen.getByTestId(INPUT_EMAIL), VALID_EMAIL);
    userEvent.type(screen.getByTestId(INPUT_PASSWORD), VALID_PASSWORD);
    userEvent.click(screen.getByTestId(LOGIN_BUTTON));

    expect(fetchMock).toBeCalled();

    await waitForElement(async () => {
      expect(await screen.findByText(meals.meals[0].strMeal)).toBeInTheDocument();
    });

    debug();
  });
});
