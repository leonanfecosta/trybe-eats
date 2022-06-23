import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa os elementos da tela de explorar comidas', () => {
  const pathToExploreFoods = () => {
    const loginEmail = screen.getByTestId('email-input');
    const loginPassword = screen.getByTestId('password-input');
    const enterBtn = screen.getByTestId('login-submit-btn');
    userEvent.type(loginEmail, 'teste@teste.com');
    userEvent.type(loginPassword, '123456789');
    userEvent.click(enterBtn);
    const exploreBtn = screen.getByTestId('explore-bottom-btn');
    userEvent.click(exploreBtn);
    const exploreFoodsBtn = screen.getByTestId('explore-foods');
    userEvent.click(exploreFoodsBtn);
  };

  test('Testa se tem todos os data-testids', () => {
    renderWithRouter(<App />);
    pathToExploreFoods();
    const byIngredient = screen.getByTestId('explore-by-ingredient');
    const byNationality = screen.getByTestId('explore-by-nationality');
    const surpriseMe = screen.getByTestId('explore-surprise');
    expect(byIngredient).toBeInTheDocument();
    expect(byNationality).toBeInTheDocument();
    expect(surpriseMe).toBeInTheDocument();
  });
  test('Testa se redireciona a pessoa para a tela de explorar por ingrediente', () => {
    const { history } = renderWithRouter(<App />);
    pathToExploreFoods();
    const linkByIngredient = screen.getByRole('link', { name: /By Ingredient/i });
    userEvent.click(linkByIngredient);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/explore/foods/ingredients');
  });
  test('Testa se redireciona a pessoa para a tela de explorar por nacionalidade', () => {
    const { history } = renderWithRouter(<App />);
    pathToExploreFoods();
    const linkByNationality = screen.getByRole('link', { name: /By Nationality/i });
    userEvent.click(linkByNationality);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/explore/foods/nationalities');
  });
  // Falta o teste de Surprise me!
});
