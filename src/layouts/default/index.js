/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/header'
import Notification from '../../components/notification'

import '../base.css'
import styles from './default.module.css'

const Layout = ({ children }) => (
  <div className={styles.gradientBg}>
    <div className={styles.whiteBg}>
      <Notification />
      <Header />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
