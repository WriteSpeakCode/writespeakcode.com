import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import styles from './header.module.css'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query LogoQuery {
        file(relativePath: { eq: "logos/wsc-logo-fullcolor.png" }) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">
              <VisuallyHidden>Home</VisuallyHidden>
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Write/Speak/Code logo in full color"
                className={styles.logo}
              />
            </Link>
          </li>
          <li>
            <a className={styles.navLink} href="#community">
              Community
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#conference">
              Conference
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#own-your-expertise">
              Own Your Expertise
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#chapter">
              Chapters
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#sponsorship">
              Sponsorship
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
