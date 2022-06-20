import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const { title } = props;
  const history = useHistory();
  const [buttonVisible, setbuttonVisible] = useState(false);

  return (
    <div>
      <button
        type="button"
        data-testids="profile-top-btn"
        onClick={ () => history.push('/profile') }
      >
        {profileIcon}

      </button>
      <title data-testids="page-title">{title}</title>
      <button
        type="button"
        data-testid="search-input"
        onClick={ () => setbuttonVisible(!buttonVisible) }
      >
        {searchIcon}

      </button>
      {buttonVisible && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
