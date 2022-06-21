import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" showButton route="drink" />
      <Footer />
    </div>
  );
}

export default Drinks;
