import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/ExploreFoodsNacionalities.module.css';
import getNacionalities from '../../services/nacionalities';

function ExploreFoodsNacionalities() {
  const [nationalities, setNationalities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const NUMBER = 12;
    getNacionalities().then((item) => setNationalities(item));
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [nationalities]);
  console.log(nationalities);

  return (
    <div className={ styles.exploreFoodsNacionalities }>
      <Header title="Explore Nationalities" showButton route="null" />
      <Footer />
      {loading && (
        <h4
          style={ { textAlign: 'center', marginTop: '100px' } }
        >
          Loading...
        </h4>
      )}
      {
        !loading && (
          <select data-testid="explore-by-nationality-dropdown">
            {nationalities.map((nacionality) => (
              <option
                key={ nacionality.strArea }
                data-testid={ `${nacionality.strArea}-option` }
              >
                {nacionality.strArea}

              </option>
            ))}
          </select>
        )
      }

    </div>
  );
}

export default ExploreFoodsNacionalities;
