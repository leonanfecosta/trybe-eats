import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Explore.module.css';

function Explore() {
  return (
    <div className={ styles.explore }>
      <Header title="Explore" showButton={ false } route="null" />
      <nav>
        <Link to="/explore/foods">
          <button
            type="button"
            data-testid="explore-foods"
            className="btn btn-info"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks">
          <button
            type="button"
            data-testid="explore-drinks"
            className="btn btn-info"
          >
            Explore Drinks
          </button>
        </Link>
      </nav>
      <Footer />
    </div>
  );
}

export default Explore;
