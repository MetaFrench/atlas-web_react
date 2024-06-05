import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const defaultState = {
  notifications: [],
  filter: 'DEFAULT'
};

describe('notification reducer functions', () => {
  test('verify notification reducer returns the default state when no action is passed', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  test('FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  test('pass MARK_AS_READ and update state correctly', () => {
    const initialStateWithNotifications = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const newState = notificationReducer(initialStateWithNotifications, action);
    expect(newState).toEqual(expectedState);
  });

  test('pass SET_TYPE_FILTER and update state correctly', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedState = {
      filter: 'URGENT',
      notifications: [],
    };

    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });
});