import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import ExternalLink from '../external-link'

import styles from './hero.module.css'

const Hero = ({ title, link, photo }) => (
  <div className={styles.container}>
    <BackgroundImage
      Tag="section"
      fluid={photo}
      backgroundColor={`var(--mint)`}
      alt={`${title} chapter photo`}
    >
      <div className={styles.overlay}>
        <section className={styles.hero}>
          <h1>{title}</h1>
          <div className={styles.cta}>
            <ExternalLink href={link} text="Join the meetup group" />
          </div>
        </section>
      </div>
    </BackgroundImage>
  </div>
)

export default Hero
