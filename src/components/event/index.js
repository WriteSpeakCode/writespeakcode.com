import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faVolumeUp,
  faFire,
  faStar,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons'

import { SpeakerButton } from '../speaker'
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
const ConfEvent = ({ title, desc, additionalNames, speakers }) => {
  const allSpeakers = []
  if (additionalNames) {
    additionalNames.map(name =>
      allSpeakers.push(speakers.find(s => s.name === name))
    )
  }
  return (
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
      </div>
    </div>
  )
}

// When the talk information comes from the speaker json file
const TalkEvent = ({ name, additionalNames, speakers }) => {
  const talkIcons = {
    workshop: faLaptopCode,
    talk: faVolumeUp,
    'fireside chat': faFire,
    keynote: faStar,
    curriculum: faBookOpen,
  }

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
      <span
        style={{
          fontSize: '.8em',
          margin: '0 .5em',
          color: 'var(--tan)',
        }}
      >
        <FontAwesomeIcon
          icon={talkIcons[talk.type]}
          style={{ margin: '0 .5em' }}
        />
        {talk.type}
      </span>
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

const Event = ({ name, time, speakers, title, desc, additionalNames }) => {
  return (
    <section className={styles.event}>
      <div>
        <span className={styles.time}>{time}</span>
        {title ? (
          <ConfEvent
            title={title}
            desc={desc}
            additionalNames={additionalNames}
            speakers={speakers}
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
