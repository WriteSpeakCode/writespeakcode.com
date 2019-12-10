import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

const ChapterTemplate = ({ data }) => {
  const { chaptersJson: chapter } = data
  return (
    <Layout>
      <section>
        <h1>{chapter.city}</h1>
      </section>
    </Layout>
  )
}

export default ChapterTemplate

export const chapterQuery = graphql`
  query Chapter($id: String!) {
    chaptersJson(id: { eq: $id }) {
      city
    }
  }
`
