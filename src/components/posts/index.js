import React from 'react'
import styles from './post.module.css'
import { Link } from 'gatsby'
import { parameterize } from '../../utils/helpers'

const Post = ({ post }) => (
  <div className={styles.post}>
    <Link to={`/blog/${parameterize(post.title)}`} className="link">
      {post.title}
    </Link>
    <span className={styles.date}>{post.date}</span>
  </div>
)

export default Post
