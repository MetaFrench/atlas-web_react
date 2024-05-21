import React from 'react'
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils'

function Footer() {
  return (
    <>
      <footer className='App-footer'>
        <p className='copyright'>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default Footer;