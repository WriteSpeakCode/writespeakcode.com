import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import styles from './notification.module.css'

const Notification = () => (
  <div className={styles.background}>
    <div className={styles.notification}>
      <FontAwesomeIcon icon={faBullhorn} aria-hidden className={styles.icon} />
      2019 Conference: Call for proposals is open and tickets are available!{' '}
      <Link to="#conference" className="link">
        Learn more
      </Link>{' '}
    </div>
  </div>
)

export default Notification
