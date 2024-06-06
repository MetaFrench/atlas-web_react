import React, { useContext } from 'react'
import { connect } from 'react-redux';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils'
// import AppContext from '../App/AppContext'

function Footer({ user }) {
  // const { user } = useContext(AppContext);

  return (
    <>
      <footer className='App-footer'>
        {user.isLoggedIn && (<p className='contact-us'><a href='#'>Contact Us</a></p>)}
        <p className='copyright'>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Footer);
// export default Footer;