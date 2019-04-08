import React, { useState } from 'react'

import styles from './menu.module.css'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const menuText = menuIsOpen ? 'close menu' : 'open menu'
  return (
    <>
      <button
        className={styles.button}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuText}
      </button>
      {menuIsOpen && <div className={styles.menu}>Menu</div>}
    </>
  )
}

export default Menu
