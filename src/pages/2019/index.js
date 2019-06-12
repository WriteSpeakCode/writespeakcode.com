import React from 'react'
import { graphql } from 'gatsby'

import ConferenceLayout from '../../layouts/conference'
import SEO from '../../components/seo'

const IndexPage = props => (
  <ConferenceLayout>
    <SEO
      title="2019 Conference"
      keywords={[`tech`, `diversity`, `conference`]}
    />
    <div style={{ height: '80vh' }}>{/*Main illustration*/}</div>
    {/*
    // Header Logo + nav links
    // Main Illustration
    // Bar: date, location
    // About section
    // Location Section: Map, hotels
    // Sponsors Section
    // FAQ Section
    */}
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
  }
`
