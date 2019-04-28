import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'

const SubpageTemplate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <section>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  )
}

export default SubpageTemplate

export const aboutPageQuery = graphql`
  query CodeOfConduct($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
