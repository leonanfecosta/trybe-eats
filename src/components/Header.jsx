import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

function Header(props) {
  const { title } = props;
  const [redirect, setRedirect] = useState('');
  const [buttonVisible, setbuttonVisible] = useState(true);

  switch (redirect) {
  case 'profile':
    return <Redirect to="/profile" />;

  default:
    return (
      <div>
        <button
          type="button"
          data-testids="profile-top-btn"
          onClick={ () => setRedirect('profile') }
        >
          Ok

        </button>
        <title data-testids="page-title">{title}</title>
        <button
          type="button"
          data-testid="search-input"
          onClick={ () => setbuttonVisible(!buttonVisible) }
        >
          Busca

        </button>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
