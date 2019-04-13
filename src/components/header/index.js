import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import VisuallyHidden from '@reach/visually-hidden'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedinIn,
  faMeetup,
  faInstagram,
  faGithub,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons'

import styles from './header.module.css'
import logo from '../../images/logos/wsc-logo-fullcolor.png'

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <Link to="/">
      <VisuallyHidden>Home</VisuallyHidden>
      <img
        src={logo}
        alt="Write/Speak/Code logo in full color"
        className={styles.logo}
        aria-hidden
      />
    </Link>
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
      {/*
      <div className={styles.cta}>
        <a
          href="/"
          className="button"
          onClick={() => alert('does nothing yet!')}
        >
          Donate
        </a>
      </div>
      */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
