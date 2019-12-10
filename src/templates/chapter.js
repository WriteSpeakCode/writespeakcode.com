import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

const ChapterTemplate = ({ data }) => {
  const { chaptersJson: chapter, allSponsorsJson: sponsors } = data
  return (
    <Layout>
      <section>
        <h1>{chapter.city}</h1>
        <ul>
          {sponsors.edges.map(sponsor => (
            <li key={sponsor.node.id}>{sponsor.node.name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default ChapterTemplate

export const chapterQuery = graphql`
  query Chapter($id: String!, $city: String!) {
    chaptersJson(id: { eq: $id }) {
      city
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
  }
`
