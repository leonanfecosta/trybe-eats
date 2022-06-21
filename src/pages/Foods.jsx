import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods() {
  return (
    <div>
      <Header title="Foods" showButton route="food" />
      <Footer />
    </div>
  );
}

export default Foods;
