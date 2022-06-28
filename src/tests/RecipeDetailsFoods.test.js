import React from 'react';
import { screen } from '@testing-library/react';
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

describe('teste do FavoriteDetailsFoods', () => {
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('avalia a renderização correta dos elementos da página', () => {
    renderWithRouter(<App />);

    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() => Promise.resolve(
        { json: () => Promise.resolve(meals) },
      ))
      .mockImplementationOnce(() => Promise.resolve(
        { json: () => Promise.resolve(drinks) },
      ))
      .mockImplementationOnce(() => Promise.resolve(
        { json: () => Promise.resolve(mealsCategories) },
      ))
      .mockImplementationOnce(() => Promise.resolve(
        { json: () => Promise.resolve(drinksCategories) },
      ));

    // const fetchMock = jest
    //   .spyOn(global, 'fetch')
    //   .mockImplementationOnce(() => Promise.resolve(
    //     { json: () => Promise.resolve(drinksCategories) },
    //   ))
    //   .mockImplementationOnce(() => Promise.resolve(
    //     { json: () => Promise.resolve(mealsCategories) },
    //   ))
    //   .mockImplementationOnce(() => Promise.resolve(
    //     { json: () => Promise.resolve(drinks) },
    //   ))
    //   .mockImplementationOnce(() => Promise.resolve(
    //     { json: () => Promise.resolve(meals) },
    //   ));

    userEvent.type(screen.getByTestId(INPUT_EMAIL), VALID_EMAIL);
    userEvent.type(screen.getByTestId(INPUT_PASSWORD), VALID_PASSWORD);
    userEvent.click(screen.getByTestId(LOGIN_BUTTON));

    expect(fetchMock).toBeCalledTimes(1);

    debug();
  });
});
