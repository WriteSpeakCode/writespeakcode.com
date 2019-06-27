import React from 'react'
import { Link } from 'gatsby'
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

const Footer = ({ conference }) => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      {conference && (
        <>
          <ul className={styles.past}>
            Past years:
            <li>2013</li>
            <li>2015</li>
            <li>
              <a
                href="http://2016.writespeakcode.com"
                target="_blank"
                rel="noopener noreferrer"
                title="2016 W/S/C conference page"
                className="link"
              >
                2016
              </a>
            </li>
            <li>
              <a
                href="https://2017.writespeakcode.com"
                target="_blank"
                rel="noopener noreferrer"
                title="2017 W/S/C conference page"
                className="link"
              >
                2017
              </a>
            </li>
            <li>
              <a
                href="https://writespeakcode.github.io/2018"
                title="2018 W/S/C conference page"
                className="link"
                rel="noopener noreferrer"
              >
                2018
              </a>
            </li>
          </ul>
          <span>
            Illustrations by:{' '}
            <a href="https://www.maiaboakye.com" className="link">
              Maia Boakye
            </a>
          </span>
        </>
      )}

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
      <p>
        {new Date().getFullYear()} ©{' '}
        <Link to={`/`} className="link">
          Write/Speak/Code
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
