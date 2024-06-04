import React, { PureComponent } from 'react'
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem'
import { NotificationItemShape } from './NotificationItemShape';

class Notification extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
  }

  static defaultProps = {
    displayDrawer: true,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
  };

  // constructor(props) {
  //   super(props);
  //   this.markAsRead = this.markAsRead.bind(this);
  // }

  // markAsRead(id) {
  //   console.log(`Notification ${id} has been marked as read`);
  // }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer;
  // }

  render () {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    return (
      <>
        <div className={css(styles.wholeNotification)}>
          {!displayDrawer && (
            <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
              <p>Your Notifications</p>
            </div>
          )}
          {displayDrawer && (
            <div className={css(styles.Notifications)}>
              <button
                className='close-button'
                type='button'
                onClick={handleHideDrawer}
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
                      <NotificationItem
                        key={notification.id}
                        id={notification.id}
                        html={notification.html}
                        type={notification.type}
                        value={notification.value}
                        markAsRead={() => markNotificationAsRead(notification.id)}
                      />
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}

const opacityAnimation = {
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

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
    position: 'fixed',
    right: '10px',
    backgroundColor: '#fff8f8',
    textAlign: 'right',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
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

export default Notification;