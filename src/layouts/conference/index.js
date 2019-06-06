import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import Footer from '../../components/footer'

import '../base.css'
import styles from './conference.module.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query ConfLayoutQuery {
        logo: file(
          relativePath: { eq: "logos/wsc-horizontallogo-onecolor-blue.png" }
        ) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  const logo = data.logo.childImageSharp.fixed
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <VisuallyHidden>Write Speak Code Home</VisuallyHidden>
          <Img fixed={logo} alt="Write/Speak/Code logo" />
        </Link>
      </header>

      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
