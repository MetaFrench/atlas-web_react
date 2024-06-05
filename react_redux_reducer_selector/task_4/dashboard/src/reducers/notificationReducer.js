import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const defaultState = Map({
  notifications: Map(),
  filter: 'DEFAULT'
});


export default function notificationReducer(state = defaultState, action) {
  switch (action.type) {
    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);
      // return {
      //   ...state,
      //   notifications: 
      //     state.notifications.map(notification => notification.id === action.index ? { ...notification, isRead: true } : notification),
      // };

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
      // return {
      //   ...state,
      //   filter: action.filter,
      // };

    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({notifications: fromJS(normalizedData.entities.notifications)});
      // return state.merge({
      //   entities: normalizedData.entities.notifications,
      //   ids: normalizedData.result
      // });
      // return state.merge(notificationsNormalizer(action.data));
      // return state.merge({notifications: fromJS(normalizedData.entities.notifications)});
      // return { ...state, notifications: action.data.map(notification => ({ ...notification, isRead: false })) };

    default:
      return state;
  }
};