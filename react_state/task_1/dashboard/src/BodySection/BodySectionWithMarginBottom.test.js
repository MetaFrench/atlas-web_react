import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component tests', () => {
  let wrapper;

  // This will run before each test and create a shallow render of the App component
  beforeEach(() => {
      wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test text</p></BodySectionWithMarginBottom>);
      StyleSheetTestUtils.suppressStyleInjection();
  });

  test('shallowing the component should render correctly the children and one h2 element', () => {
      expect(wrapper.exists()).toBe(true);
      const bodySection = wrapper.find('BodySection');
      expect(bodySection.exists()).toBe(true);
      expect(bodySection.prop('title')).toBe('test title');
      expect(bodySection.contains('test text')).toBe(true);
  });
});