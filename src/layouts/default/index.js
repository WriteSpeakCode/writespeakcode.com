import React from 'react'
import PropTypes from 'prop-types'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'

import '../base.css'
import styles from './default.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <SkipNavLink />
      <Header />
      <SkipNavContent>
        <main className={styles.container}>{children}</main>
      </SkipNavContent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
