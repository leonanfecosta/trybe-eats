import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <h1 data-testid="profile-email">
        Email
      </h1>
      <Link to="/done-recipes">
        <button
          data-testid="profile-done-btn"
          type="button"
        >
          Done Recipes
        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          data-testid="profile-favorite-btn"
          type="button"
        >
          Favorite Recipes
        </button>
      </Link>
      <button
        data-testid="profile-logout-btn"
        type="button"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
