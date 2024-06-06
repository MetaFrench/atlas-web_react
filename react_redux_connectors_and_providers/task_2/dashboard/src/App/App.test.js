import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import Footer from '../Footer/Footer';

const mockStore = configureStore([]);
const initialState = fromJS({
  ui: {
    isUserLoggedIn: false,
    isNotificationDrawerVisible: false,
    notifications: [],
  },
});
const store = mockStore(initialState);

describe('App component tests', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    ).dive();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('App renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('App contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  test('App contains the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  test('App contains the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  test('App contains the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  test('CourseList is not displayed when isLoggedIn is false', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  test('CourseList is displayed when isLoggedIn is true', () => {
    const loggedInState = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
        notifications: [],
      },
    });
    const loggedInStore = mockStore(loggedInState);
    const loggedInWrapper = shallow(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    ).dive();
    expect(loggedInWrapper.find(CourseList).exists()).toBe(true);
  });

  test('Login is not displayed when isLoggedIn is true', () => {
    const loggedInState = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
        notifications: [],
      },
    });
    const loggedInStore = mockStore(loggedInState);
    const loggedInWrapper = shallow(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    ).dive();
    expect(loggedInWrapper.find(Login).exists()).toBe(false);
  });

  test('verify mapStateToProps returns the correct object', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
        notifications: [],
      },
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
      listNotifications: [],
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});