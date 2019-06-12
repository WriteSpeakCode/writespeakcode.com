import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import Menu from '../menu'

import styles from './header.module.css'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query LogoQuery {
        file(relativePath: { eq: "logos/wsc-logo-fullcolor.png" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <VisuallyHidden>Home</VisuallyHidden>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Write/Speak/Code logo in full color"
            className={styles.logo}
          />
        </Link>
        <Menu />
      </div>
    </header>
  )
}

export default Header
