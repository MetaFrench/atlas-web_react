import courseReducer from "./courseReducer";
import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

// const dafaultState = [];
const defaultState = fromJS({
  courses: {},
});

describe('course reducer functions', () => {
  test('the default state returns an empty array', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  test('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ]
    };

    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      }
    });

    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  test('SELECT_COURSE returns the data with the right item updated', () => {
    const initialStateWithCourses = fromJS ({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      }
    });

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      }
    });

    const newState = courseReducer(initialStateWithCourses, action);
    expect(newState).toEqual(expectedState);
  });

  test('UNSELECT_COURSE returns the data with the right item updated', () => {
    const initialStateWithSelectedCourse = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    const newState = courseReducer(initialStateWithSelectedCourse, action);
    expect(newState).toEqual(expectedState);
  });
});