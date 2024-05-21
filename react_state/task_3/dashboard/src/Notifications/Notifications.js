import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem'
import { NotificationItemShape } from './NotificationItemShape';

class Notification extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps = {
    displayDrawer: true,
    listNotifications: [],
  };

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render () {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.wholeNotification)}>
          <div className={css(styles.menuItem)}>
            <p>Your Notifications</p>
          </div>
          {displayDrawer && (
            <div className={css(styles.Notifications)}>
              <button
                className='close-button'
                type='button'
                onClick={() => console.log('Close button has been clicked')}
                style={{ display: 'inline', position: 'absolute', top: '1px', right: '1px', background: 'none', border: 'none' }}
                aria-label='Close'
              >
              <span style={{ fontSize: '24px' }} aria-hidden='true'>&times;</span>
              </button>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <>
                  <p>Here is the list of notifications</p>
                  <ul className={css(styles.ul)}>
                    {listNotifications.map((notification) => (
                      notification.type === 'urgent' ? (
                        <NotificationItem key={notification.id} id={notification.id} html={notification.html} type={notification.type} value={notification.value} markAsRead={this.markAsRead} />
                      ) : (
                        <NotificationItem key={notification.id} id={notification.id} html={notification.html} type={notification.type} value={notification.value} markAsRead={this.markAsRead} />
                      )
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </>
    )
  }
}

const styles = StyleSheet.create({
  wholeNotification: {
    position: 'absolute',
    right: '1%',
    width: '40%',
    '@media (max-width: 900px)': {
      width: '98vw',
      // height: '100vh',
      margin: 0,
      padding: 0,
      fontSize: '20px',
    },
  },
  
  menuItem: {
    textAlign: 'right',
    '@media (max-width: 900px)': {
      position: 'fixed',
      right: '10px'
    },
  },
  
  ul: {
    '@media (max-width: 900px)': {
      padding: '0'
    },
  },

  Notifications: {
    border: '3px dotted red',
    paddingTop: '1rem',
    position: 'relative',
    '@media (max-width: 900px)': {
      backgroundColor: 'white',
      border: 'none',
      // paddingTop: '1rem',
      height: '100vh',
    },
  },
});

export default Notification