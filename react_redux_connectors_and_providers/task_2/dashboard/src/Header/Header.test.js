import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Header from './Header';

const mockStore = configureStore([]);
const initialState = fromJS({
  ui: {
    isUserLoggedIn: true,
    user: {
      email: 'test@example.com',
    },
  },
});
const store = mockStore(initialState);

describe('Header component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    ).dive();
  });

  test('Header renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Header contains a logout section when user is logged in', () => {
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });
});