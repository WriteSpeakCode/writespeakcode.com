import React from 'react'
import Layout from '../layouts/default'
import SEO from '../components/seo'

const Blog = ({ data }) => (
  <Layout>
    <SEO keywords={[`tech`, `diversity`, `blog`]} />
    <header>
      <h1>Blog</h1>
    </header>
    <section>
      {/* Iterate over blog posts */}
    </section>
  </Layout>
)

export default Blog