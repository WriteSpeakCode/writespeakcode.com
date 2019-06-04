import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import VisuallyHidden from '@reach/visually-hidden'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Notification from '../../components/notification'

import '../base.css'
import styles from './home.module.css'

const HomeLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        hero: file(relativePath: { eq: "photos/WSC-2017-68.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <>
      <SkipNavLink />
      <Header />
      <BackgroundImage
        Tag="section"
        fluid={data.hero.childImageSharp.fluid}
        backgroundColor={`var(--mint)`}
      >
        <div className={styles.overlay}>
          <section className={styles.hero}>
            <VisuallyHidden>
              <h1>Write Speak Code</h1>
            </VisuallyHidden>
            <h2 className={styles.mission}>
              We're on a mission to promote the visibility and leadership of
              technologists with marginalized genders through peer-led
              professional development.
            </h2>
            <h3 className={styles.headline}>
              Write/Speak/Code is a 501c3, tax-exempt non-profit that hosts an
              annual conference and meetup events designed to help you fully own
              your expertise through writing, speaking, and open source.
            </h3>
            <Notification />
          </section>
        </div>
      </BackgroundImage>
      <SkipNavContent>
        <main>{children}</main>
      </SkipNavContent>
      <Footer />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
