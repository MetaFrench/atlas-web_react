import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT  } from '../actions/uiActionTypes'
// import { SELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

describe('ui reducer functions', () => {
  test('verifying the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  test('verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' })
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  test('verifying the state returned, when DISPLAY_NOTIFICATION_DRAWER is passed, changes  the isNotificationDrawerVisible property', () => {
    const newState = uiReducer(undefined, { type: 'DISPLAY_NOTIFICATION_DRAWER' })
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    });
  });
});