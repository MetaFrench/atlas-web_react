import React from 'react'
import './Login.css';

function Login() {
  return (
    <>
      <main className='App-body'>
        <p className='login'>Login to access the full dashboard</p>
        <label className='email' htmlFor="email">Email:</label>
        <input className='lilSpace' type="email" id="email" name="email"/>
        <label className='lilSpace' htmlFor="pwd"> Password:</label>
        <input className='lilSpace' type="password" id="pwd" name="pwd"/>
        <button className='lilSpace'>OK</button>
      </main>
      <hr></hr>
    </>
  );
}

export default Login;