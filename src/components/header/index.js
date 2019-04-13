import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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

const Header = () => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        file(relativePath: { eq: "logos/wsc-logo-fullcolor.png" }) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <Link to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Write/Speak/Code logo in full color"
            className={styles.logo}
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
    )}
  />
)
export default Header
