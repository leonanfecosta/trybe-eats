import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const history = useHistory();

  return (
    <footer data-testid="footer">
      <h2>Footer</h2>
      <input
        type="button"
        data-testid="drinks-bottom-btn"
        className="footer-button-icon"
        onClick={ () => history.push('/drinks') }
        src={ drinkIcon }
      />
      <input
        type="button"
        data-testid="explore-bottom-btn"
        className="footer-button-icon"
        onClick={ () => history.push('/explore') }
        src={ exploreIcon }
      />
      <input
        type="button"
        data-testid="food-bottom-btn"
        className="footer-button-icon"
        onClick={ () => history.push('/foods') }
        src={ mealIcon }
      />
    </footer>
  );
}

export default Footer;
