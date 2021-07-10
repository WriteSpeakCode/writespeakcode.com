import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/default'
import SEO from '../components/seo'
import Post from '../components/posts'

const Blog = ({ data }) => {
  const posts = data.allPostsJson.nodes
  return (
    <Layout>
      <SEO title="Blog" keywords={[`tech`, `diversity`, `blog`]} />
      <header>
        <h1>Blog</h1>
      </header>
      <section>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </Layout>
  )
}

export default Blog

export const postsQuery = graphql`
  query {
    allPostsJson {
      nodes {
        id
        subtitle
        title
        body
        date
        slug
      }
    }
  }
`
