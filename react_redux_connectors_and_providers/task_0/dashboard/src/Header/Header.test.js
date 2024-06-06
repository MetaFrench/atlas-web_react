import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

describe('Header component tests', () => {
    let wrapper;

    // This will run before each test and create a shallow render of the App component
    beforeEach(() => {
        wrapper = shallow(<Header />);
        StyleSheetTestUtils.suppressStyleInjection();
    });

    test('Header renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    test('Header renders a div with the class App-header', () => {
      const header = wrapper.find('header')
      expect(header.exists()).toBe(true);
      expect(header.prop('className')).toBeDefined();
      expect(header.prop('className')).toContain('appHeader');
    });

    test('Header renders an img element', () => {
      expect(wrapper.find('img').exists()).toBe(true);
    });

    test('Header renders an h1 element', () => {
      expect(wrapper.find('h1').exists()).toBe(true);
    });
});