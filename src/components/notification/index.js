import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import styles from './notification.module.css'

const Notification = () => (
  <div className={styles.notification}>
    <FontAwesomeIcon icon={faBullhorn} aria-hidden className={styles.icon} />
    <a
      href="https://writespeakcode.us4.list-manage.com/subscribe/post?u=5659d87448185ddd72045cf1a&amp;id=f195dc3634"
      className="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Subscribe to our mailing list
    </a>{' '}
    for updates on our community and events.
  </div>
)

export default Notification
