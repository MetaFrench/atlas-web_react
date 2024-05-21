import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext';

class App extends React.Component {

  static propTypes = {
    // isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  }

  static defaultProps = {
    // isLoggedIn: false,
    logOut: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        // isLoggedIn: false,
      },
      logOut: this.logOut,
      logIn: this.logIn,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer () {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      }
    });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      }
    });
  }

  render() {
    // const { isLoggedIn } = this.props;
    const { displayDrawer, user } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ]
  
    const listNotifications = [
      { id: 1, type: 'default', value: 'New Course Available'},
      { id: 2, type: 'urgent', value: 'New Resume Available'},
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
    ]

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut, logIn: this.state.logIn }}>
        <Notification
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications} 
        />
        <div className='App'>
          <Header />
          {user.isLoggedIn ? (
              <>
                <BodySectionWithMarginBottom title="Course list">
                    <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              </>
          ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                  <Login />
              </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </BodySection>
          <hr></hr>
          <Footer />
        </div>
      </ AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  fontWeight900: {
    fontWeight: 900
  },

  appLogo: {
    width: '250px'
  },
  
  appBody: {
    paddingBottom: '25rem'
  },
  
  login: {
    marginTop: '3rem',
    marginLeft: '2rem'
  },
  
  email: {
    marginLeft: '2rem'
  },

  lilSpace: {
    marginLeft: '0.5rem'
  },

  body: {
    fontWeight: 900
  },

  footer: {
    fontWeight: 900
  }
});

export default App;