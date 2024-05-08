import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils'

function App() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>School Dashboard</h1>
        </header>
        <hr></hr>
        <main className='App-body'>
            <p className='login'>Login to access the full dashboard</p>
            <label className='email' htmlFor="email">Email:</label>
            <input className='lilSpace' type="email" id="email" name="email"/>
            <label className='lilSpace' htmlFor="pwd"> Password:</label>
            <input className='lilSpace' type="password" id="pwd" name="pwd"/>
            <button className='lilSpace'>OK</button>
          </main>
        <hr></hr>
        <footer className='App-footer'>
            <p className='copyright'>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </>
  );
}

export default App;