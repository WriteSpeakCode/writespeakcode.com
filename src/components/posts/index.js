import React from 'react'
// import styles from './post.module.css'
import { Link } from 'gatsby'

const Post = ({ post }) => (
  <article itemScope itemType="http://schema.org/Article">
    <header>
      <h2>
        <Link to={post.fields.slug} itemProp="url" className="link">
          <span itemProp="headline">{post.frontmatter.title}</span>
        </Link>
      </h2>
      {post.frontmatter.date}
      <p>Time to read: {post.timeToRead} minutes</p>
    </header>
    <section>
      <p
        dangerouslySetInnerHTML={{
          __html: post.frontmatter.description || post.excerpt,
        }}
        itemProp="description"
      />
    </section>
  </article>
)

export default Post
