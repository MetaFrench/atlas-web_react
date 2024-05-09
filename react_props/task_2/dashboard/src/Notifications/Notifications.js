import React, { Component } from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'

class Notification extends Component {
  render() {
    return (
      <div className='Notifications'>
        <button className='close-button' type='button' onClick={() => console.log('Close button has been clicked')} style={{ display: 'inline', position: 'absolute', top: 1 + 'px', right: 1 + 'px', background: 'none', border: 'none' }} aria-label='Close'><span style={{ fontSize: '24px' }} aria-hidden="true">&times;</span></button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
      </div>
    )
  }
}

export default Notification