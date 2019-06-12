import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedinIn,
  faMeetup,
  faInstagram,
  faGithub,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons'
import VisuallyHidden from '@reach/visually-hidden'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <span>© {new Date().getFullYear()}</span>
      <div className={styles.social}>
        <a
          className={styles.link}
          href="https://twitter.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VisuallyHidden>Twitter</VisuallyHidden>
          <FontAwesomeIcon icon={faTwitter} aria-hidden />
        </a>
        <a
          className={styles.link}
          href="https://www.meetup.com/pro/writespeakcode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VisuallyHidden>Meetup</VisuallyHidden>
          <FontAwesomeIcon icon={faMeetup} aria-hidden />
        </a>
        <a
          className={styles.link}
          href="https://linkedin.com/company/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VisuallyHidden>LinkedIn</VisuallyHidden>
          <FontAwesomeIcon icon={faLinkedinIn} aria-hidden />
        </a>
        <a
          className={styles.link}
          href="https://instagram.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VisuallyHidden>Instagram</VisuallyHidden>
          <FontAwesomeIcon icon={faInstagram} aria-hidden />
        </a>
        <a
          className={styles.link}
          href="https://github.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VisuallyHidden>Github</VisuallyHidden>
          <FontAwesomeIcon icon={faGithub} aria-hidden />
        </a>
        <a
          className={styles.link}
          href="https://www.patreon.com/writespeakcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VisuallyHidden>Patreon</VisuallyHidden>
          <FontAwesomeIcon icon={faPatreon} aria-hidden />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
