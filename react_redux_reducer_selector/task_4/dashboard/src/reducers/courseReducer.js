import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import {  Map, fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const defaultState = Map({
  courses: Map()
});

export default function courseReducer(state = defaultState, action) {
  switch (action.type) {

    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.merge({
        // courses: fromJS(normalizedData.entities.courses),
        courses: fromJS(normalizedData.entities.courses).map(course => course.set('isSelected', false)),
      });
      // return action.data.map(course => ({
      //   ...course,
      //   isSelected: false
      // }));

    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);
      // return state.map(course => course.id === action.index ? { ...course, isSelected: true } : course);

    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);
      // return state.map(course => course.id === action.index ? { ...course, isSelected: false } : course);
  
    default:
      return state;
  }
};