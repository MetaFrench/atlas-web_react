import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('UI action creator tests', () => {
  test('should correct LOGIN object', () => {
    const email = 'test@email.com';
    const password = 'Password123';
    const expectedAction = {
      type: LOGIN,
      user: {email, password}
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  test('should return correct LOGOUT object', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  test('should return correct DISPLAY_NOTIFICATION_DRAWER object', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  test('should return correct HIDE_NOTIFICATION_DRAWER object', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});
