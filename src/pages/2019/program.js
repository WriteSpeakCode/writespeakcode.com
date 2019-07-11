import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'

import Talk from '../../components/talk'

import styles from './program.module.css'

const Program2019 = ({ data }) => {
  const speakers = data.allSpeakersJson.nodes
  return (
    <ConfLayout subpage={true}>
      <SEO title="Program | 2019 Conference" />
      <section className={styles.talks}>
        <h1 className="title">Program</h1>
        <h2 className="subtitle">
          Workshops, personalized feedback sessions, panels, and talks by
          talented technologists with marginalized genders.
        </h2>
        {speakers.map(speaker => (
          <Talk speaker={speaker} key={speaker.id} />
        ))}
      </section>
    </ConfLayout>
  )
}

export default Program2019

export const programQuery = graphql`
  {
    allSpeakersJson(
      filter: {
        talks: { elemMatch: { year: { eq: "2019" } } }
        years: { in: "2019" }
      }
      sort: { fields: talks___title, order: ASC }
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
        talks {
          desc
          title
          year
          type
        }
      }
    }
  }
`
