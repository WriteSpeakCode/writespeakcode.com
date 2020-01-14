import React from 'react'
import { graphql } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import Header from '../components/header'
import Footer from '../components/footer'
import { SponsorsGrid } from '../components/sponsors'

import Hero from '../components/hero'

const ChapterTemplate = ({ data }) => {
  const { chaptersJson: chapter, allSponsorsJson: sponsors } = data
  return (
    <>
      <SkipNavLink />
      <Header />
      <SkipNavContent>
        <main>
          <Hero
            title={chapter.city}
            link={chapter.meetup}
            photo={data.file.childImageSharp.fluid}
          />

          <section className="container">
            <SponsorsGrid sponsors={sponsors.edges} />
          </section>
        </main>
      </SkipNavContent>
      <Footer />
    </>
  )
}

export default ChapterTemplate

export const chapterQuery = graphql`
  query Chapter($id: String!, $city: String!, $photo: String!) {
    chaptersJson(id: { eq: $id }) {
      city
      meetup
      photo
    }
    allSponsorsJson(
      filter: { sponsorships: { elemMatch: { city: { eq: $city } } } }
    ) {
      edges {
        node {
          id
          name
          logo
          url
        }
      }
    }
    file(relativePath: { eq: $photo }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
