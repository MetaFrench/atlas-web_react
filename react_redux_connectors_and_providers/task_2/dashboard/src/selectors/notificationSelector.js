const filterTypeSelected = (state) => state.get('filter');

const getNotifications = (state) => state.get('notifications');

const getUnreadNotifications = (state) => getNotifications(state).filter(notification => !notification.get('isRead'));

export {filterTypeSelected, getNotifications, getUnreadNotifications};