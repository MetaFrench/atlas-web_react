import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer'
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  }

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    // console.log("Adding keydown event listener");
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // console.log("Removing keydown event listener");
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    // console.log("Key pressed: ", event.key);
    // console.log("Ctrl key pressed: ", event.ctrlKey);
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

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
      <>
        <Notification displayDrawer={true} listNotifications={listNotifications} />
        <div className='App'>
          <Header />
          {isLoggedIn ? (
              <>
                <BodySectionWithMarginBottom title="Course list">
                    <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
                <BodySection title="News from the School">
                    <p>Yee-haw!</p>
                </BodySection>
              </>
          ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                  <Login />
              </BodySectionWithMarginBottom>
          )}
          <hr></hr>
          <Footer />
        </div>
      </>
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