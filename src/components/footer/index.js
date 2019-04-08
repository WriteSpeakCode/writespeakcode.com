import React from 'react'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>Footer © {new Date().getFullYear()}</footer>
)

export default Footer
