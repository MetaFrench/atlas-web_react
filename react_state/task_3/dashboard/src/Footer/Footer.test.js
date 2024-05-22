import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

describe('Footer component tests', () => {
    let wrapper;
    let contextValue;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    test('Footer renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Footer renders a div with the class App-footer', () => {
      expect(wrapper.find('.App-footer').length).toBe(1);
    });

    test('Header renders an img element', () => {
      expect(wrapper.text()).toContain('Copyright');
    });

    test('verify that the contact link is not displayed when the user is logged out within the context', () => {
      contextValue = {
        user: {
            email: 'test@example.com',
            password: '',
            isLoggedIn: false
        },
      };
      wrapper = mount(
          <AppContext.Provider value={contextValue}>
              <Footer />
          </AppContext.Provider>
      );
      expect(wrapper.find('.contact-us').exists()).toBe(false);
    });

    test('verify that the contact link is displayed when the user is logged in within the context', () => {
      contextValue = {
        user: {
            email: 'test@example.com',
            password: '',
            isLoggedIn: true
        },
      };
      wrapper = mount(
          <AppContext.Provider value={contextValue}>
              <Footer />
          </AppContext.Provider>
      );
      expect(wrapper.find('.contact-us').exists()).toBe(true);
    });
});