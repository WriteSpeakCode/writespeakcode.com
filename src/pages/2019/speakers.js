import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'

import Speaker from '../../components/speaker'

import styles from './speakers.module.css'

const Speakers2019 = ({ data }) => {
  const speakers = data.allSpeakersJson.nodes
  return (
    <ConfLayout subpage={true}>
      <SEO title="Speakers | 2019 Conference" />
      <section className={styles.speakers}>
        <h1 className="title">Speakers</h1>
        <div className={styles.grid}>
          {speakers.map(speaker => (
            <Speaker speaker={speaker} key={speaker.id} />
          ))}
        </div>
      </section>
    </ConfLayout>
  )
}

export default Speakers2019

export const speakersQuery = graphql`
  query {
    allSpeakersJson(
      filter: { years: { in: "2019" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        id
        name
        role
        headshot
        company
        bio
        pronouns
        links {
          type
          url
        }
      }
    }
  }
`
