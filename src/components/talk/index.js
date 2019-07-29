import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faVolumeUp,
  faFire,
  faStar,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons'
import { SpeakerDialog } from '../speaker'
import { parameterize } from '../../utils/helpers'

import styles from './talk.module.css'

export const TALK_ICONS = {
  workshop: faLaptopCode,
  talk: faVolumeUp,
  'fireside chat': faFire,
  keynote: faStar,
  curriculum: faBookOpen,
}

export const TalkType = ({ type, secondary }) => {
  return (
    <span className={secondary ? styles.secondary : null}>
      <FontAwesomeIcon icon={TALK_ICONS[type]} className={styles.icon} />
      <span className={styles.type}>{type}</span>
    </span>
  )
}

const Talk = ({ speaker }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const talk = speaker.talks[0]
  if (talk.year && talk.title && talk.desc && talk.desc && talk.type) {
    return (
      <section className={styles.section} id={parameterize(talk.title)}>
        <div>
          <h2 className="title">{talk.title}</h2>
          <TalkType type={talk.type} />
          <button
            onClick={() => setDialogIsOpen(true)}
            className={styles.dialogButton}
          >
            {speaker.name}
          </button>
        </div>
        <p>{talk.desc}</p>
        <SpeakerDialog
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
          speaker={speaker}
          showLinkToTalk={false}
        />
      </section>
    )
  }
  return null
}

export default Talk
