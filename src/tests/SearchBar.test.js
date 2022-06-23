import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const SEARCH_INPUT = 'search-input';
const SEARCH_BUTTON = 'exec-search-btn';
const TOP_BUTTON = 'search-top-btn';
const RADIO_BUTTONS = [
  'ingredient-search-radio', 'name-search-radio', 'first-letter-search-radio',
];

describe('SearchBar', () => {
  it('renders search input, input radios and search button', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const searchInput = screen.getElementById(SEARCH_INPUT);
    const searchButton = screen.getElementById(SEARCH_BUTTON);
    const topButton = screen.getElementById(TOP_BUTTON);
    expect(searchInput).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
    RADIO_BUTTONS.forEach((radioButton) => {
      expect(screen.getElementById(radioButton)).not.toBeInTheDocument();
    });
    expect(topButton).toBeInTheDocument();
  });
});
