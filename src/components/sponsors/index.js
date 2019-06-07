// @flow
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './sponsors.module.css'

const parameterize = str => str.replace(' ', '').toLowerCase()

// Select all sponsors with sponsorships in specific year
const filterByYear = (sponsors, year) => {
  return sponsors.filter(sponsor =>
    sponsor.sponsorships.some(s => s.year === year)
  )
}

const renderSponsors = (levels, sponsors, year) => {
  return levels.map(level => {
    // If any sponsors have sponsorships with current level, add them to list
    let list =
      sponsors.filter(sponsor =>
        sponsor.sponsorships.some(s => s.level === level.level)
      ) || []

    if (list.length > 0) {
      return <Level key={level.id} level={level.level} sponsors={list} />
    }
    return null
  })
}

const Level = ({ level, sponsors }) => (
  <section
    className={[styles[parameterize(level)], styles.levelSection].join(' ')}
  >
    <h3 className={styles.heading}>{level}</h3>
    <div className={styles.grid}>
      {sponsors.map(sponsor => {
        return (
          <div className={styles.sponsor} key={sponsor.id}>
            <a
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
            <p>{sponsor.company_text}</p>
          </div>
        )
      })}
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

const Sponsors = ({
  sponsors,
  conf_sponsor,
}: {
  sponsors: SponsorsType,
  conference: boolean,
}) => {
  const { allSponsorLevelsJson } = useStaticQuery(
    graphql`
      query {
        allSponsorLevelsJson {
          nodes {
            id
            level
          }
        }
      }
    `
  )

  return (
    <section id="sponsorship" className={styles.section}>
      <div className={styles.row}>
        <div className={styles.info}>
          <h1 className={styles.title}>Sponsorship</h1>
          <h2 className={styles.subtitle}>
            Recruit talented, driven technologists.
          </h2>
          <p>
            Sponsorship is the most effective way to demonstrate your commitment
            to the professional development of people with marginalized genders
            at your organization.
          </p>
        </div>
        <div className={styles.cta}>
          <p>
            Write/Speak/Code is a 501c3 nonprofit. Contact{' '}
            <span className="italic">sponsor@writespeakcode.com</span> to learn
            more.
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
      {renderSponsors(
        allSponsorLevelsJson.nodes,
        filterByYear(sponsors, '2019'),
        '2019'
      )}
    </section>
  )
}

export default Sponsors
