import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators', () => {
  test('should return the MARK_AS_READ object', () => {
    const expectedAction = {
      type: MARK_AS_READ,
      index: 1
    };
    expect(markAsRead(1)).toEqual(expectedAction);
  });

  test('should return the SET_TYPE_FILTER object', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
  });
});