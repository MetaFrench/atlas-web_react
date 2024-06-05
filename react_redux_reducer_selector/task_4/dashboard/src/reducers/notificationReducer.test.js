import notificationReducer from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// const defaultState = {
//   notifications: [],
//   filter: 'DEFAULT'
// };
const defaultState = Map({
  notifications: Map(),
  filter: 'DEFAULT'
});

describe('notification reducer functions', () => {
  test('verify notification reducer returns the default state when no action is passed', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(defaultState);
  });

  test('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notificationsData = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" }
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData
    };
    const state = notificationReducer(undefined, action);
    const normalizedData = notificationsNormalizer(notificationsData);
    expect(fromJS(state.get('notifications'))).toEqual(fromJS(normalizedData.entities.notifications));
  });

  test('pass MARK_AS_READ and update state correctly', () => {
    const initialStateWithNotifications = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    });

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      },
    });

    const newState = notificationReducer(initialStateWithNotifications, action);
    expect(newState).toEqual(expectedState);
  });

  test('pass SET_TYPE_FILTER and update state correctly', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedState = fromJS({
      filter: 'URGENT',
      notifications: {},
    });

    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });
});