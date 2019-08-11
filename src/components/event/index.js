import React from 'react'

import { SpeakerButton } from '../speaker'
import { TalkType } from '../talk'
import { parameterize } from '../../utils/helpers'

import styles from './event.module.css'

function renderEventInfo(title, desc) {
  return desc ? (
    <details>
      <summary>
        <h3 className={styles.title}>{title}</h3>
      </summary>
      <p>{desc}</p>
    </details>
  ) : (
    <h3 className={styles.title}>{title}</h3>
  )
}

// When the talk information is in the schedule.json
const ConfEvent = ({
  title,
  desc,
  type,
  additionalNames,
  speakers,
  sponsors,
  eventSponsors,
  menu,
}) => {
  const allSpeakers = []
  if (additionalNames) {
    additionalNames.map(name =>
      allSpeakers.push(speakers.find(s => s.name === name))
    )
  }

  const allSponsors = []
  if (eventSponsors) {
    eventSponsors.map(sponsorName =>
      allSponsors.push(sponsors.find(s => s.name === sponsorName))
    )
  }

  return (
    <>
      {type && type !== 'food' && <TalkType type={type} secondary />}
      <div className={styles.grid}>
        {renderEventInfo(title, desc)}
        <div>
          {additionalNames &&
            allSpeakers.map((speaker, index) => (
              <SpeakerButton
                speaker={speaker}
                speakers={speakers}
                key={`speaker-${speaker.name}-${index}`}
              />
            ))}
          {eventSponsors &&
            allSponsors.map(company => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={company.url}
                key={company.id}
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={styles.sponsorLogo}
                />
              </a>
            ))}
          {menu && (
            <a
              href={menu}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View menu (pdf)
            </a>
          )}
        </div>
      </div>
    </>
  )
}

// When the talk information comes from the speaker json file
const TalkEvent = ({ name, additionalNames, speakers }) => {
  const speaker = speakers.find(s => s.name === name)
  const allSpeakers = [speaker]
  const talk = speaker.talks.find(t => t.year === '2019')
  if (additionalNames) {
    additionalNames.map(name =>
      allSpeakers.push(speakers.find(s => s.name === name))
    )
  }

  return (
    <>
      {talk.type && <TalkType type={talk.type} secondary />}
      <div className={styles.grid}>
        {renderEventInfo(talk.title, talk.desc)}
        <div>
          {allSpeakers.map(speaker => (
            <SpeakerButton speaker={speaker} key={parameterize(speaker.name)} />
          ))}
        </div>
      </div>
    </>
  )
}

const Event = ({
  name,
  time,
  speakers,
  sponsors,
  eventSponsors,
  title,
  desc,
  type,
  additionalNames,
  menu,
}) => {
  return (
    <section className={`${styles.event} ${styles[type]}`}>
      <div>
        <span className={styles.time}>{time}</span>
        {title ? (
          <ConfEvent
            title={title}
            desc={desc}
            type={type}
            additionalNames={additionalNames}
            speakers={speakers}
            sponsors={sponsors}
            eventSponsors={eventSponsors}
            menu={menu}
          />
        ) : (
          <TalkEvent
            name={name}
            additionalNames={additionalNames}
            speakers={speakers}
          />
        )}
      </div>
    </section>
  )
}

export default Event
