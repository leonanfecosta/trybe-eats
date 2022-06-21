import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const { title, showButton } = props;
  const history = useHistory();
  const [buttonVisible, setbuttonVisible] = useState(false);

  return (
    <div>
      <input
        type="image"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
        alt="profileIcon"
      />
      <h3 data-testid="page-title">{title}</h3>
      { showButton && <input
        type="image"
        data-testid="search-top-btn"
        onClick={ () => setbuttonVisible(!buttonVisible) }
        src={ searchIcon }
        alt="searchIcon"
      />}
      { buttonVisible && <SearchBar /> }
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired,
};

export default Header;
