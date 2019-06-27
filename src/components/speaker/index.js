import React, { useState } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import styles from './speaker.module.css'

const randomPlaceholder = () => {
  const placeholders = [
    '/images/speaker.jpg',
    '/images/speaker2.jpg',
    '/images/speaker3.jpg',
  ]
  return placeholders[Math.floor(Math.random() * placeholders.length)]
}

const Speaker = ({ speaker }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  return (
    <>
      <figure className={styles.speaker} onClick={() => setDialogIsOpen(true)}>
        <img
          src={speaker.headshot ? speaker.headshot : randomPlaceholder()}
          alt={`${speaker.name} headshot`}
          className={styles.headshot}
        />
        <figcaption>
          <h3>{speaker.name}</h3>
          {speaker.role && <h4>{speaker.role}</h4>}
          {speaker.company && <h5>{speaker.company}</h5>}
        </figcaption>
      </figure>
      <Dialog
        isOpen={dialogIsOpen}
        onDismiss={() => setDialogIsOpen(false)}
        className={styles.dialog}
      >
        <header className={styles.header}>
          <h1 className={styles.info}>{speaker.name}</h1>
          <button
            className={styles.close}
            onClick={() => setDialogIsOpen(false)}
          >
            <VisuallyHidden>Close</VisuallyHidden>
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.menuButton}
              onClick={() => setDialogIsOpen(!dialogIsOpen)}
            />
          </button>
        </header>
        Speaker Info
      </Dialog>
    </>
  )
}

export default Speaker
