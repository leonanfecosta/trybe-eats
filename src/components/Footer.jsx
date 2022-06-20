import React from 'react';
import { Redirect } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <h2>Footer</h2>
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        className="footer-button-icon"
        onClick={ () => <Redirect to="/drinks" /> }
      >
        { drinkIcon }
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        className="footer-button-icon"
        onClick={ () => <Redirect to="/explore" /> }
      >
        { exploreIcon }
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        className="footer-button-icon"
        onClick={ () => <Redirect to="/foods" /> }
      >
        { mealIcon }
      </button>
    </footer>
  );
}

export default Footer;
