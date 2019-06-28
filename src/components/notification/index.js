import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import styles from './notification.module.css'

const Notification = () => (
  <div className={styles.notification}>
    <FontAwesomeIcon icon={faBullhorn} aria-hidden className={styles.icon} />
    #WSC2019Conf &mdash; August 16&ndash;18 in San Francisco:{' '}
    <Link to="/2019/" className="link">
      Register now
    </Link>
  </div>
)

export default Notification
