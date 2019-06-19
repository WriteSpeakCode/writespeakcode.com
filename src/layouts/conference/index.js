import React from 'react'

import Footer from '../../components/footer'

import '../base.css'
import styles from './conference.module.css'

const Layout = ({ children }) => {
  const logo = data.logo.childImageSharp.fixed
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
