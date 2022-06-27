import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreFoodsNacionalities.module.css';

function ExploreFoodsNacionalities() {
  return (
    <div className={ styles.exploreFoodsNacionalities }>
      <Header title="Explore Nationalities" showButton route="null" />
      <Footer />
    </div>
  );
}

export default ExploreFoodsNacionalities;
