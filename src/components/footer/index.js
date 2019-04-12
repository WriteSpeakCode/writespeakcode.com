import React from 'react'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <span>© {new Date().getFullYear()}</span>
    </div>
  </footer>
)

export default Footer
