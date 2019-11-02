import React from 'react'
import { graphql } from 'gatsby'
import Organizer from '../organizer'
import styles from './organizers.module.css'

const Organizers = ({data}) => {
  // console.log('organizer data is', data.allOrganizersJson.nodes);
  const singleOrganizer = {
    "name": "Alex Millatmal",
    "pronouns": "she/her",
    "role": "Web Application Developer",
    "city": "New York City",
    "company": "Newsela",
    "headshot": "/images/alex-millatmal.jpg",
    "links": [
      {
        "type": "twitter",
        "url": "halfghaninNE"
      },
      {
        "type": "linkedin",
        "url": "alexandrajmh"
      },
      {
        "type": "github",
        "url": "halfghaninNE"
      },
      // {
      //   "type": "website",
      //   "url": "https://alexandramillatmal.com/"
      // }
    ],
    "layout": "speaker",
    "bio": "Alex is a programmer with a passion for work that has real-world impact. At Newsela, she writes software that helps students read and teachers teach. When she's not thinking about refactoring her Ruby or good object-oriented front-end patterns, Alex spends a lot of time thinking about secular space/discourse, ethics in communicating “othered” experiences, how many cats are too many cats, and if she’ll ever write a novel.",
    "years": ["2019"],
    "talks": [
      {
        "year": "2019",
        "type": "curriculum",
        "title": "Speak Day Curriculum"
      }
    ]
  }
  const boardMembers = []
  const chapterLeaders = []
  const conferenceOrganizers = []
  const websiteContributors = [singleOrganizer, singleOrganizer, singleOrganizer, singleOrganizer, singleOrganizer]  

  return (
    <section id="about" className={styles.aboutUs}>
        <div className={styles.wrap}>
          <section>
            <h3 className={styles.heading}>Board Members</h3>
            <div className={styles.grid}>
              {boardMembers.map(boardMember => (
                <Organizer />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Chapter Leaders</h3>
            <div className={styles.grid}>
              {chapterLeaders.map(chapterLeader => (
                <Organizer />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Conference Organizers</h3>
            <div className={styles.grid}>
              {conferenceOrganizers.map(conferenceOrganizer => (
                <Organizer />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Website Contributors</h3>
            <div className={styles.grid}>
              {websiteContributors.map(websiteContributor => (
                <Organizer organizer={websiteContributor}/>
              ))}
            </div>
          </section>
        </div>
    </section>
  )
};

export default Organizers

export const organizersQuery = graphql`
  query {
    allOrganizersJson(
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        id
        name
        role
        headshot
        pronouns
        links {
          type
          url
        }
      }
    }
  }
`