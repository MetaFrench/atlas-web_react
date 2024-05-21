import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('Login component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<Login />);
        StyleSheetTestUtils.suppressStyleInjection();
    });

    beforeAll(() => {
      jest.spyOn(console, 'error').mockImplementation((msg) => {
        if (!msg.includes('findDOMNode')) {
          console.error(msg);
        }
      });
    });
    
    afterAll(() => {
      console.error.mockRestore();
    });

    test('Login renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Login renders a div with the class App-body', () => {
      expect(wrapper.find('.App-body').length).toBe(1);
    });

    test('Login renders two input elements', () => {
      expect(wrapper.find('input').length).toBe(3);
    });

    test('Login renders two label elements', () => {
      expect(wrapper.find('label').length).toBe(2);
    });

    test('verify that the submit button is disabled by default', () => {
      expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    });

    test('verify that after changing the value of the two inputs, the button is enabled', () => {
      wrapper = mount(<Login />);
      const emailInput = wrapper.find('input[type="email"]');
      const passwordInput = wrapper.find('input[type="password"]');
    
      emailInput.simulate('change', { target: { value: 'test@example.com' } });
      passwordInput.simulate('change', { target: { value: 'password123' } });
    
      wrapper.update();
    
      expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
      wrapper.unmount();
    });
});