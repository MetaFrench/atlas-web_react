import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import { Map, fromJS } from 'immutable';

const state = fromJS({
  filter: 'DEFAULT',
  notifications: {
    1: { id: 1, type: 'default', value: 'New course available', isRead: false },
    2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
    3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
  }
});

describe('notification selector tests', () => {
  test('filterTypeSelected works as expected', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('DEFAULT');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });

  test('getUnreadNotifications return a list of the message entities within the reducer', () => {
    const notifications = getUnreadNotifications(state);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });
});