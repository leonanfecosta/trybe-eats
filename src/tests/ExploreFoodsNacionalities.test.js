import React from 'react';
import {
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import URLS from './mocks/urls';

const EXPLORE_NACIONALITIES_PATH = '/explore/foods/nationalities';

const SELECT_NACIONALITY_DROPDOWN = 'explore-by-nationality-dropdown';

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

describe('teste do FavoriteDetailsDrinks', () => {
  it('avalia a renderização correta dos elementos da página', async () => {
    // Criação de um mock genérico com a utilização de Object Literals proveniente
    // da monitoria com o instrutor Especialista Zambelli durante a monitoria
    const fetchMock = jest
      .spyOn(global, 'fetch').mockImplementation(async (URL) => (
        { json: async () => URLS[URL] || expect(URL).validURL(URLS) }
      ));

    const { history } = renderWithRouter(<App />);
    history.push(EXPLORE_NACIONALITIES_PATH);
    expect(fetchMock).toBeCalled();

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(screen.getByTestId(SELECT_NACIONALITY_DROPDOWN)).toBeInTheDocument();
  });
});
