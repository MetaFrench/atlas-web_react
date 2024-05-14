import React from 'react'
import PropTypes from 'prop-types';

function NotificationItem({ id, type = 'default', value, html, markAsRead }) {
  // const handleClick = () => {
  //   markAsRead(id);
  // };

  return (
    <>
      {html ? (
        <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>
      ) : (
        <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>
      )}
    </>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

export default NotificationItem