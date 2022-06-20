import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  const [redirect, setRedirect] = useState('');

  // Solução do redirect com Switch proveniente da monitoria com o instrutor Moisés Santana e Ander
  switch (redirect) {
  case 'drinks':
    return <Redirect to="/drinks" />;
  case 'explore':
    return <Redirect to="/explore" />;
  case 'foods':
    return <Redirect to="/foods" />;
  default:
    return (
      <footer data-testid="footer">
        <h2>Footer</h2>
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          className="footer-button-icon"
          onClick={ () => setRedirect('drinks') }
        >
          { drinkIcon }
        </button>
        <button
          type="button"
          data-testid="explore-bottom-btn"
          className="footer-button-icon"
          onClick={ () => setRedirect('explore') }
        >
          { exploreIcon }
        </button>
        <button
          type="button"
          data-testid="food-bottom-btn"
          className="footer-button-icon"
          onClick={ () => setRedirect('foods') }
        >
          { mealIcon }
        </button>
      </footer>
    );
  }
}

export default Footer;
