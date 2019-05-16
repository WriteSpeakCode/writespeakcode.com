import React from 'react'
import { graphql } from 'gatsby'

import ConferenceLayout from '../../layouts/conference'
import SEO from '../../components/seo'

import Section from '../../components/section'
import Sponsors from '../../components/sponsors'

import styles from './index.module.css'

const IndexPage = props => (
  <ConferenceLayout>
    <SEO
      title="2019 Conference"
      keywords={[`tech`, `diversity`, `conference`]}
    />

    <Section id="about">
      <h1 className={styles.title}>About</h1>
      <h2 className={styles.subtitle}>August 16-18, 2019</h2>
      <p>
        We're on a mission to promote the visibility and leadership of
        technologists with marginalized genders through peer-led professional
        development. Join us for three days designed to fully own your expertise
        through writing, speaking, and open source.
      </p>
    </Section>

    <Section id="location">
      <div>
        <h1 className={styles.title}>Location</h1>
        <h2 className={styles.subtitle}>
          Palace of Fine Arts, San Francisco, CA
        </h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.488895918175!2d-122.4505230490306!3d37.8020160796551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586d510144681%3A0xe960db8a581aacf5!2sPalace+of+Fine+Arts!5e0!3m2!1sen!2sus!4v1556593751369!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameBorder="0"
        title="Palace of Fine Arts San Francisco Google Maps"
      />
    </Section>

    <Sponsors sponsors={props.data.allSponsorsJson.nodes} />
  </ConferenceLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    about: file(relativePath: { eq: "photos/conferences-alt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allSponsorsJson(
      filter: { years: { in: "2019" }, conf_sponsor: { eq: true } }
    ) {
      nodes {
        company
        company_url
        logo
        level
      }
    }
  }
`
