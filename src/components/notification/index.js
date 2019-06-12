import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import styles from './notification.module.css'

const Notification = () => (
  <div className={styles.notification}>
    <FontAwesomeIcon icon={faBullhorn} aria-hidden className={styles.icon} />
    2019 Conference: Tickets are now available{' '}
    <a href="#conference" className="link">
      Learn more
    </a>
  </div>
)

export default Notification
