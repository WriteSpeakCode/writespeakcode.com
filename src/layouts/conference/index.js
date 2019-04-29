import React from 'react'
import PropTypes from 'prop-types'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import '../base.css'
import styles from './conference.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query ConfLogoQuery {
        file(
          relativePath: { eq: "logos/wsc-horizontallogo-onecolor-blue.png" }
        ) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <section className={styles.hero}>
          <div className={styles.info}>
            <Link to="/">
              <VisuallyHidden>Write Speak Code Home</VisuallyHidden>
              <Img
                fixed={data.file.childImageSharp.fixed}
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
        </section>

        <main className={styles.bg}>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
