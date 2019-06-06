import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import styles from './menu.module.css'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const icon = menuIsOpen ? faTimes : faBars

  const menu = (
    <nav className={styles.links}>
      <a href="#community">Community</a>
      <a href="#conference">Conference</a>
      <a href="#own-your-expertise">Own Your Expertise</a>
      <a href="#chapters">Chapters</a>
      <a href="#sponsorship">Sponsorship</a>
    </nav>
  )

  return (
    <div>
      <div className={styles.large}>{menu}</div>
      <div className={styles.small}>
        <FontAwesomeIcon
          icon={icon}
          className={styles.menuButton}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
        {menuIsOpen && menu}
      </div>
    </div>
  )
}

export default Menu
