import React, { useState } from 'react'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '@reach/dialog/styles.css'
import styles from './hotels.module.css'

import hotels from '../../../content/2019/hotels.json'

const Hotel = ({ hotel }) => (
  <section className={styles.hotel}>
    <div>
      <h3 className="title">{hotel.name}</h3>
      <h4 className="subtitle">{hotel.address}</h4>
      <p className="italic">{hotel.phone}</p>
    </div>
    <div>
      <p>Rate: {hotel.rate}</p>
      <p>Group Name: {hotel.group_name}</p>
      {hotel.link && (
        <a href={hotel.link} className="link">
          Book a room
        </a>
      )}
    </div>
  </section>
)

const Hotels = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setDialogIsOpen(true)} className={styles.button}>
        view hotels
      </button>
      <Dialog
        isOpen={dialogIsOpen}
        onDismiss={() => setDialogIsOpen(false)}
        className={styles.dialog}
      >
        <header className={styles.header}>
          <h1 className={styles.info}>Hotel Information</h1>
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
        {hotels.map(hotel => (
          <Hotel hotel={hotel} />
        ))}
      </Dialog>
    </>
  )
}

export default Hotels
