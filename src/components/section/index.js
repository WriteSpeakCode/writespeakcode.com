import React from 'react'
import Img from 'gatsby-image'

import styles from './section.module.css'

const Section = ({
  children,
  img,
  imgAlt,
  imgStyle,
  id,
  sectionStyle,
  contentStyle,
}) => {
  return (
    <section
      className={img ? styles.photoSection : styles.section}
      id={id}
      style={sectionStyle}
    >
      {img ? (
        <Img
          alt={imgAlt}
          fluid={img}
          imgStyle={imgStyle}
          className={styles.image}
        />
      ) : (
        ''
      )}
      <div className={styles.content} style={contentStyle}>
        {children}
      </div>
    </section>
  )
}

export default Section
