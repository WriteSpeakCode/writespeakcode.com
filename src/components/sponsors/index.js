// @flow
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Section from '../section'
import styles from './sponsors.module.css'

const parameterize = str => str.replace(' ', '').toLowerCase()

const renderSponsors = (levels, sponsors) => {
  return levels.map(({ node }) => {
    let list =
      sponsors.filter(sponsor => sponsor.level.includes(node.level)) || []

    if (list.length > 0) {
      return <Level key={node.id} level={node.level} sponsors={list} />
    }
    return null
  })
}

const Level = ({ level, sponsors, id }) => (
  <section className={styles[parameterize(level)]}>
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

type SponsorsType = [
  {
    company: String,
    company_url: String,
    logo: String,
    level: Array<String>,
  },
]

const Sponsors = ({ sponsors }: { sponsors: SponsorsType }) => (
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
      <Section id="sponsorship">
        <div className={styles.row}>
          <div className={styles.info}>
            <h1 className={styles.title}>Sponsorship</h1>
            <h2 className={styles.subtitle}>
              Recruit talented, driven technologists.
            </h2>
            <p>
              Sponsorship is the most effective way to demonstrate your
              commitment to the professional development of people with
              marginalized genders at your organization.
            </p>
          </div>
          <div className={styles.cta}>
            <p>
              Write/Speak/Code is a 501c3 nonprofit. Contact{' '}
              <span className="italic">sponsor@writespeakcode.com</span> to
              learn more.
            </p>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1X-nDSHYiPiPT79Rc1xUAZCNxvr67ei6J/view?usp=sharing"
            >
              2019 Sponsorship Prospectus
            </a>
          </div>
        </div>

        {renderSponsors(data.allSponsorLevelsJson.edges, sponsors)}
      </Section>
    )}
  />
)

export default Sponsors
