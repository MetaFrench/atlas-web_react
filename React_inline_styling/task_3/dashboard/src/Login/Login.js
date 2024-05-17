import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <main className='App-body'>
        <p className={css(styles.login)}>Login to access the full dashboard</p>
        <label className={css(styles.email)} htmlFor="email">Email:</label>
        <input className={css(styles.lilInputSpace, styles.input)} type="email" id="email" name="email"/><br className={css(styles.dontDisplay)}></br>
        <label className={css(styles.lilSpace)} htmlFor="pwd"> Password:</label>
        <input className={css(styles.lilInputSpace, styles.input)} type="password" id="pwd" name="pwd"/><br className={css(styles.dontDisplay)}></br>
        <button className={css(styles.lilSpace)}>OK</button>
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

// function Login() {
//   return (
//     <>
//       <main className='App-body'>
//         <p className='login'>Login to access the full dashboard</p>
//         <label className='email' htmlFor="email">Email:</label>
//         <input className='lilSpace' type="email" id="email" name="email"/>
//         <label className='lilSpace' htmlFor="pwd"> Password:</label>
//         <input className='lilSpace' type="password" id="pwd" name="pwd"/>
//         <button className='lilSpace'>OK</button>
//       </main>
//     </>
//   );
// }