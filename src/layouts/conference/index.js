import React from 'react'
import PropTypes from 'prop-types'

import '../base.css'
import styles from './conference.module.css'

const Layout = ({ children }) => (
  <div className={styles.container}>
    <section>
      <h1>2019 Conference</h1>
    </section>
    <nav>
      <ul>
        <li>Logo</li>
        <li>Speakers</li>
        <li>Workshops</li>
        <li>Location</li>
        <li>Schedule</li>
        <li>Sponsors</li>
        <li>Tickets</li>
      </ul>
    </nav>
    <main>{children}</main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
