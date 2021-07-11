import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../layouts/default'
import SEO from '../../components/seo'
import Post from '../../components/posts'

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="Blog" keywords={[`tech`, `diversity`, `blog`]} />
      <header>
        <h1>Blog</h1>
      </header>
      <section>
        <ol style={{ listStyle: `none`, padding: 0, margin: 0 }}>
          {posts.map(post => {
            return (
              <li key={post.fields.slug}>
                <Post post={post} />
              </li>
            )
          })}
        </ol>
      </section>
    </Layout>
  )
}

export default Blog

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          templateKey
        }
        timeToRead
      }
    }
  }
`
