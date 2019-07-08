import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'

import Talk from '../../components/talk'

import styles from './program.module.css'

const Program2019 = ({ data }) => {
  const speakers = data.allSpeakersJson.nodes
  const talks = speakers.filter(s => s.talks[0].type === 'talk')
  const workshops = speakers.filter(s => s.talks[0].type === 'workshop')
  return (
    <ConfLayout subpage={true}>
      <SEO title="Program | 2019 Conference" />
      <section className={styles.talks}>
        <h1 className="title">Talks</h1>
        {talks.map(speaker => (
          <Talk speaker={speaker} key={speaker.id} />
        ))}

        <h1 className="title">Workshops</h1>
        {workshops.map(speaker => (
          <Talk speaker={speaker} key={speaker.id} />
        ))}
      </section>
    </ConfLayout>
  )
}

export default Program2019

export const programQuery = graphql`
  query {
    allSpeakersJson(
      filter: {
        talks: { elemMatch: { year: { eq: "2019" } } }
        years: { in: "2019" }
      }
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
