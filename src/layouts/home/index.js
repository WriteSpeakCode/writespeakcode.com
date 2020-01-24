import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import VisuallyHidden from '@reach/visually-hidden'

import Header from '../../components/header'
import Footer from '../../components/footer'

import '../base.css'
import styles from './home.module.css'
import { ExternalLink } from '../../components/link'

const HomeLayout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query LayoutQuery {
        hero: file(relativePath: { eq: "photos/WSC-2017-68-3.jpg" }) {
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
            <ExternalLink
              text="Subscribe to our mailing list"
              href="https://writespeakcode.us4.list-manage.com/subscribe/post?u=5659d87448185ddd72045cf1a&amp;id=f195dc3634"
            />
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
