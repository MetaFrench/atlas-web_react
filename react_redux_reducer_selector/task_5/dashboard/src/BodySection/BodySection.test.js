import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component tests', () => {
  let wrapper;

  // This will run before each test and create a shallow render of the App component
  beforeEach(() => {
      wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>);
  });

  test('shallowing the component should render correctly the children and one h2 element', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('h2').exists()).toBe(true);
      expect(wrapper.find('h2').text()).toContain('test title');
      expect(wrapper.find('p').exists()).toBe(true);
      expect(wrapper.find('p').text()).toContain('test children node');
  });
});