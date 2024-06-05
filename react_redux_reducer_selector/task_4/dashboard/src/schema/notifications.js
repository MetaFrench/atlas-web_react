import * as notificationsData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalizedData = normalize(notificationsData.default, [notification]);

function notificationsNormalizer(data) {
  const normalizedData = normalize(data, [notification]);
  return normalizedData;
}

function getAllNotificationsByUser(userId) {
  // const notifications = normalizedData.entities.notifications;
  // const messages = normalizedData.entities.messages;
  const { entities } = normalizedData;
  const { notifications, messages } = entities;
  let result = []

  for (let key in notifications) {
    if (notifications[key].author === userId) {
      result.push(messages[notifications[key].context]);
    }
  }
  return result;
}

export { getAllNotificationsByUser, notificationsNormalizer, normalizedData };