import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <main className='App-body'>
        <p className={css(styles.login)}>Login to access the full dashboard</p>
        <label className={css(styles.email)} htmlFor="email">Email:</label>
        <input className={css(styles.lilSpace)} type="email" id="email" name="email"/>
        <label className={css(styles.lilSpace)} htmlFor="pwd"> Password:</label>
        <input className={css(styles.lilSpace)} type="password" id="pwd" name="pwd"/>
        <button className={css(styles.lilSpace)}>OK</button>
      </main>
    </>
  );
}

const styles = StyleSheet.create({
  login: {
    marginTop: '3rem',
    marginLeft: '2rem'
  },
  
  email: {
    marginLeft: '2rem'
  },

  lilSpace: {
    marginLeft: '0.5rem'
  }
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