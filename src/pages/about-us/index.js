import React from 'react'
// import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from '../../components/header'
import Organizers from '../../components/Organizers'
import Footer from '../../components/footer'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'


// import HomeLayout from '../../layouts/home'
// import SEO from '../components/seo'

import styles from './index.module.css'

const IndexPage = ({ data }) => {
  const organizers = data.allOrganizersJson.nodes

  return (
    <>
    <SkipNavLink />
    <Header />
    <SkipNavContent>
      <section
        id="about-us"
        className={[styles.photoSection, styles.aboutUs].join(' ')}
      >
        <div className={styles.row}>
          <Img
            alt="A smiling speaker talks on stage at the 2018 conference with a microphone."
            fluid={data.organizers.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
            className={styles.image}
          />
          <div className={styles.content}>
            {' '}
            <h1 className="title">About Us</h1>
            <h2 className="subtitle">
              Meet the hard-working board, chapter leaders, and conference organizers behind Write/Speak/Code.
            </h2>
            <p>
              Email us at info@writespeakcode.com to learn about different ways to get involved in our community.
            </p>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.meetup.com/pro/writespeakcode/"
              className="link"
            >
              Find events on Meetup
            </a> */}
          </div>
        </div>
      </section>
      <Organizers organizers={organizers}/>
    </SkipNavContent>
    <Footer />
    </>    
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    organizers: file(relativePath: { eq: "photos/WSC-SF.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    },
      allOrganizersJson(
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          role
          headshot
          pronouns
          city
          links {
            type
            url
          }
        }
      }
  }
`