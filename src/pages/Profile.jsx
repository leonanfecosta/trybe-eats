import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Profile.module.css';

function Profile() {
  const history = useHistory();
  const [profileEmail, setProfileEmail] = useState('');

  useEffect(() => {
    setProfileEmail(JSON.parse(localStorage.getItem('user')));
  }, []);

  const logoutBtn = (event) => {
    event.preventDefault();
    history.push('/');
    localStorage.clear();
  };

  return (
    <div className={ styles.profile }>
      <Header title="Profile" showButton={ false } route="null" />
      <h3 data-testid="profile-email">
        { profileEmail ? profileEmail.email : 'Email não informado' }
      </h3>
      <nav>

        <Link to="/done-recipes">
          <button
            data-testid="profile-done-btn"
            type="button"
            className="btn btn-info"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            data-testid="profile-favorite-btn"
            type="button"
            className="btn btn-info"
          >
            Favorite Recipes
          </button>
        </Link>
        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ logoutBtn }
          className="btn btn-info"
        >
          Logout
        </button>
      </nav>
      <Footer />
    </div>
  );
}

export default Profile;
