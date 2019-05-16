import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../section'
import styles from './sponsors.module.css'

const parameterize = str => str.replace(' ', '').toLowerCase()

const renderSponsors = (levels, sponsors) => {
  return levels.map(({ node }) => {
    let sponsorsList = sponsors.filter(sponsor =>
      sponsor.level.includes(node.level)
    )

    if (sponsorsList.length > 0) {
      return <Level key={node.id} level={node.level} sponsors={sponsorsList} />
    }
  })
}

const Level = ({ level, sponsors, id }) => (
  <section className={styles[parameterize(level)]} id="sponsors">
    <h3 className={styles.heading}>{level}</h3>
    <div className={styles.grid}>
      {sponsors.map((sponsor, index) => (
        <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          href={sponsor.company_url}
        >
          <img
            src={sponsor.logo}
            alt={sponsor.company}
            className={styles.logo}
          />
        </a>
      ))}
    </div>
  </section>
)

const Sponsors = ({ sponsors }) => (
  <StaticQuery
    query={graphql`
      query {
        allSponsorLevelsJson {
          edges {
            node {
              level
              id
            }
          }
        }
      }
    `}
    render={data => (
      <Section>
        <h1 className={styles.title}>Sponsorship</h1>
        <h2 className={styles.subtitle}>
          Recruit talented, driven technologists.
        </h2>
        <p>
          Sponsorship is the most effective way to demonstrate your commitment
          to the professional development of people with marginalized genders at
          your organization. Write/Speak/Code is a 501c3 nonprofit. Contact
          sponsor@writespeakcode.com to learn more.
        </p>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1X-nDSHYiPiPT79Rc1xUAZCNxvr67ei6J/view?usp=sharing"
        >
          2019 Sponsorship Prospectus
        </a>

        {renderSponsors(data.allSponsorLevelsJson.edges, sponsors)}
      </Section>
    )}
  />
)

export default Sponsors
