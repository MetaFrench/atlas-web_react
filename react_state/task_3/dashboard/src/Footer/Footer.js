import React, { useContext } from 'react'
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils'
import AppContext from '../App/AppContext'

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <>
      <footer className='App-footer'>
        {user.isLoggedIn && (<p className='contact-us'><a href='#'>Contact Us</a></p>)}
        <p className='copyright'>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default Footer;