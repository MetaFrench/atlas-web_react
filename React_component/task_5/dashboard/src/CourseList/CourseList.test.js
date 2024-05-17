import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component tests', () => {
  test('Renders CourseList component without crashing', () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.exists()).toBe(true);
  });

  test('Renders 5 different rows', () => {
      const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ]
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      
      const theadRows = wrapper.find('thead').find('CourseListRow');
      expect(theadRows).toHaveLength(2);

      const tbodyRows = wrapper.find('tbody').find('CourseListRow');
      expect(tbodyRows).toHaveLength(3);
  });

  test('CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
      let wrapper = shallow(<CourseList listCourses={[]} />);
      let theadRows = wrapper.find('thead').find('CourseListRow');
      expect(theadRows).toHaveLength(2);
      let tbodyRows = wrapper.find('tbody').find('tr');
      expect(tbodyRows).toHaveLength(1);
      expect(wrapper.text().includes('No course available yet')).toBe(true);

      wrapper = shallow(<CourseList />);
      theadRows = wrapper.find('thead').find('CourseListRow');
      expect(theadRows).toHaveLength(2);
      tbodyRows = wrapper.find('tbody').find('tr');
      expect(tbodyRows).toHaveLength(1);
      expect(wrapper.text().includes('No course available yet')).toBe(true);
  });

  test('when you pass a list of courses, the component renders it correctly', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find('CourseListRow')).toHaveLength(5);

    const courseRows = wrapper.find('tbody').find('CourseListRow');
    expect(courseRows.at(0).prop('textFirstCell')).toBe('ES6');
    expect(courseRows.at(0).prop('textSecondCell')).toBe('60');
    expect(courseRows.at(1).prop('textFirstCell')).toBe('Webpack');
    expect(courseRows.at(1).prop('textSecondCell')).toBe('20');
    expect(courseRows.at(2).prop('textFirstCell')).toBe('React');
    expect(courseRows.at(2).prop('textSecondCell')).toBe('40');
  });
});