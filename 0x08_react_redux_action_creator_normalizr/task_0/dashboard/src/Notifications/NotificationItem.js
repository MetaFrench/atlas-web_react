import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite';
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
          type === 'urgent' ? (
            <li className={css(styles.urgent, styles.li)} data-priority={type} dangerouslySetInnerHTML={html} onClick={this.handleClick}></li>
          ) : (
            <li className={css(styles.default, styles.li)} data-priority={type} dangerouslySetInnerHTML={html} onClick={this.handleClick}></li>
          )
        ) : (
          type === 'urgent' ? (
            <li className={css(styles.urgent, styles.li)} data-priority={type} onClick={this.handleClick}>{value}</li>
          ) : (
            <li className={css(styles.default, styles.li)} data-priority={type} onClick={this.handleClick}>{value}</li>
          )
          
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

const styles = StyleSheet.create({
  default: {
    color: 'navy'
  },
  
  urgent: {
    color: 'red'
  },

  li: {
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      listStyleType: 'none',
      padding: '10px 8px'
    },
  }
});

export default NotificationItem