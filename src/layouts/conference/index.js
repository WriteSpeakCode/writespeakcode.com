import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import VisuallyHidden from '@reach/visually-hidden'

import Footer from '../../components/footer'

import '../base.css'
import styles from './conference.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
        background: file(relativePath: { eq: "photos/WSC-309.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const bgData = data.background.childImageSharp.fluid
      const logoData = data.logo.childImageSharp.fixed
      return (
        <>
          <BackgroundImage
            Tag="section"
            fluid={bgData}
            backgroundColor={`var(--mint)`}
            className={styles.heroBg}
          >
            <div className={styles.mintBg}>
              <div className={styles.info}>
                <Link to="/">
                  <VisuallyHidden>Write Speak Code Home</VisuallyHidden>
                  <Img
                    fixed={logoData}
                    alt="Write/Speak/Code logo"
                    className={styles.logo}
                  />
                </Link>
                <h2 className={styles.subtitle}>
                  August 16-18, 2019 / San Francisco, CA
                </h2>
              </div>
              <nav className={styles.nav}>
                <ul className={styles.links}>
                  <li>
                    <a className="link" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#location">
                      Location
                    </a>
                  </li>
                  <li>
                    <a className="link" href="#sponsors">
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://goo.gl/forms/gPMUnIwnvYMuh3Tp1"
                    >
                      Call for Proposals
                    </a>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://writespeakcode-2019conference.eventbrite.com/"
                    >
                      Get Tickets
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </BackgroundImage>

          <main className={styles.main}>{children}</main>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
