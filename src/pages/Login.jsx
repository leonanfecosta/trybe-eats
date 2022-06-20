import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Login() {
  const { password, email, handleChange } = useContext(UserContext);
  const history = useHistory();
  const validateButton = () => {
    const SEIS = 6;
    if (email.includes('@')
      && email.includes('.')
      && password.length > SEIS) return false;
    return true;
  };

  const handleLoginButton = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const objeto = {
      email,
    };
    localStorage.setItem('user', JSON.stringify(objeto));
    history.push('/foods');
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        value={ email }
        onChange={ ({ target }) => handleChange(target) }
        placeholder="Digite seu e-mail"
        data-testid="email-input"
      />
      <input
        type="password"
        name="password"
        value={ password }
        onChange={ ({ target }) => handleChange(target) }
        placeholder="Digite sua senha"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ validateButton() }
        onClick={ handleLoginButton }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
