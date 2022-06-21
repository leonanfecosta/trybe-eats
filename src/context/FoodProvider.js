import React from 'react';
import PropTypes from 'prop-types';
import FoodContext from './FoodContext';

function FoodProvider({ children }) {
  const [food, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const contextValue = {
    food,
    setFood,
    drinks,
    setDrinks,
  };

  return (
    <FoodContext.Provider value={ contextValue }>
      {children}
    </FoodContext.Provider>
  );
}

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodProvider;
