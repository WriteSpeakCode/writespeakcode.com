import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import SEO from '../../components/seo'
import Footer from '../../components/footer'

import '../base.css'
import styles from './conference.module.css'

const ConferenceLayout = ({ children, data, subpage }) => {
  const images = useStaticQuery(graphql`
    query {
      sf: file(relativePath: { eq: "illustrations/2019-sf.png" }) {
        childImageSharp {
          fluid(maxWidth: 3600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      banner: file(relativePath: { eq: "illustrations/2019-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 3600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
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
  `)

  return (
    <>
      <SEO
        keywords={[`tech`, `diversity`, `conference`]}
        title="2019 Conference"
      />
      <header className={subpage ? styles.header : styles.landing}>
        <Link to="/2019/">
          <VisuallyHidden>2019 Home</VisuallyHidden>
          <Img
            fixed={images.logo.childImageSharp.fixed}
            alt="Write/Speak/Code logo"
            className={styles.logo}
          />
        </Link>
        <div className={styles.info}>
          <VisuallyHidden>Write Speak Code 2019 Conference</VisuallyHidden>
          <h2 className="subtitle">
            August 16&ndash;18, 2019 / San Francisco, CA
          </h2>
          <a
            href="https://www.eventbrite.com/e/writespeakcode-2019-conference-tickets-58347757714"
            rel="noopener noreferrer"
            target="_blank"
          >
            Register Now
          </a>
        </div>
      </header>
      {!subpage && (
        <Img
          alt="Illustration of San Francisco by Maia Boakye"
          fluid={images.sf.childImageSharp.fluid}
          className={styles.heroImage}
        />
      )}
      {subpage && (
        <Img
          alt="Illustration of San Francisco by Maia Boakye"
          fluid={images.banner.childImageSharp.fluid}
          className={styles.bannerImage}
        />
      )}
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default ConferenceLayout
