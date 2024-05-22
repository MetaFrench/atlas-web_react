import React, { useState, useContext } from 'react'
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

function Login() {
  const { logIn } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // setIsLoggedIn(true);
    logIn(email, password);
  };

  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    updateSubmitState(newEmail, password);
  };

  const handleChangePassword  = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    updateSubmitState(email, newPassword);
  };

  const updateSubmitState = (email, password) => {
    if(email !== '' && password !== ''){
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  return (
    <>
      <main className='App-body'>
        <p className={css(styles.login)}>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label className={css(styles.email)} htmlFor="email">Email:</label>
          <input className={css(styles.lilInputSpace, styles.input)} onChange={handleChangeEmail} value={email} type="email" id="email" name="email"/><br className={css(styles.dontDisplay)}></br>
          <label className={css(styles.lilSpace)} htmlFor="pwd"> Password:</label>
          <input className={css(styles.lilInputSpace, styles.input)} onChange={handleChangePassword} value={password} type="password" id="pwd" name="pwd"/><br className={css(styles.dontDisplay)}></br>
          <input type='submit' className={css(styles.lilSpace)} value='OK' disabled={!enableSubmit}></input>
        </form>
      </main>
    </>
  );
}

const styles = StyleSheet.create({
  login: {
    '@media (min-width: 900px)': {
      marginTop: '3rem',
      marginLeft: '2rem'
    }
  },
  
  email: {
    '@media (min-width: 900px)': {
      marginLeft: '2rem'
    }
  },

  lilSpace: {
    '@media (min-width: 900px)': {
      marginLeft: '0.5rem'
    }
  },

  lilInputSpace: {
    marginLeft: '0.5rem'
  },

  dontDisplay: {
    '@media (min-width: 900px)': {
      display: 'none'
    }
  },

  input: {
    '@media (max-width: 900px)': {
      border: 'none',
      background: 'none',
      outline: 'none',
    }
  },
});

export default Login;