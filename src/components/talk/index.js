import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faVolumeUp,
  faFire,
  faStar,
  faBookOpen,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { SpeakerButton } from '../speaker'
import { parameterize } from '../../utils/helpers'

import styles from './talk.module.css'

export const TALK_ICONS = {
  workshop: faLaptopCode,
  talk: faVolumeUp,
  'fireside chat': faFire,
  keynote: faStar,
  curriculum: faBookOpen,
  panel: faComments,
}

export const TalkType = ({ type }) => {
  return (
    <span className={styles.type}>
      <FontAwesomeIcon icon={TALK_ICONS[type]} className={styles.icon} />
      {type}
    </span>
  )
}

const Talk = ({ speaker }) => {
  const talk = speaker.talks[0]
  if (talk.year && talk.title && talk.desc && talk.desc && talk.type) {
    return (
      <section className={styles.section} id={parameterize(talk.title)}>
        <div>
          <h2 className="title">{talk.title}</h2>
          <div>
            <TalkType type={talk.type} />
          </div>
          <SpeakerButton speaker={speaker} />
        </div>
        <p>{talk.desc}</p>
      </section>
    )
  }
  return null
}

export default Talk
