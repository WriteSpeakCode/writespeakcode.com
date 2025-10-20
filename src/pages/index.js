import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import HomeLayout from '../layouts/home'
import SEO from '../components/seo'
import Sponsors from '../components/sponsors'
import styles from './index.module.css'
import { ExternalLink } from '../components/link'

const IndexPage = ({ data }) => (
  <HomeLayout>
<h1>Write/Speak/Code has sunset.</h1>
  </HomeLayout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 3600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    conf: file(relativePath: { eq: "photos/WSC2019-88.jpg" }) {
      ...fluidImage
    }
    oye: file(relativePath: { eq: "photos/WSC-NY-577.jpg" }) {
      ...fluidImage
    }
    chapters: file(relativePath: { eq: "photos/WSC-178.jpg" }) {
      ...fluidImage
    }
    community: file(relativePath: { eq: "photos/WSC-NY-590.jpg" }) {
      ...fluidImage
    }
  }
`
