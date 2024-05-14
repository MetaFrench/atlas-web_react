import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  };

  render () {
    const { id, type = 'default', value, html } = this.props;

    return (
      <>
        {html ? (
          <li data-priority={type} dangerouslySetInnerHTML={html} onClick={this.handleClick}></li>
        ) : (
          <li data-priority={type} onClick={this.handleClick}>{value}</li>
        )}
      </>
    );
  }
}

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