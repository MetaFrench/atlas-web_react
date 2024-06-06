import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('action creator tests', () => {
  test('should return the SELECT_COURSE action object', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      payload: index
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  test('should return the UNSELECT_COURSE action object', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      payload: index
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});
