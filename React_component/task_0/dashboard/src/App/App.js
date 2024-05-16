import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer'
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {

  static propTypes = {
    isLoggedIn: PropTypes.bool,
  }

  static defaultProps = {
    isLoggedIn: false,
  }

  constructor(props) {
    super(props);
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
              <CourseList listCourses={listCourses} />
          ) : (
              <Login />
          )}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;