import React from 'react';

function Header() {
  return (
    <div>
      <h2>Header</h2>
      <button
        type="button"
        data-testids="profile-top-btn"
        onClick="#"
      >
        Ok

      </button>
      <title data-testids="page-title">Ok</title>
      <button
        type="button"
        data-testid="search-input"
        onClick="#"
      >
        Busca

      </button>
    </div>
  );
}

export default Header;
