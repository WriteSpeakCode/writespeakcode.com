import { Link } from 'gatsby'
import React from 'react'

import styles from './header.module.css'
import logo from '../../images/logos/wsc-logo-fullcolor.png'

const Header = () => (
  <header>
    <Link to="/">
      <img
        src={logo}
        alt="Write/Speak/Code logo in full color"
        className={styles.logo}
      />
    </Link>
    <ul>
      <li>
        <a
          href="https://twitter.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </header>
)

export default Header
