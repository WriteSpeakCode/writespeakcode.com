import React, { useState } from 'react'
import { SpeakerDialog } from '../speaker'
import { parameterize } from '../../utils/helpers'

import styles from './talk.module.css'

const Talk = ({ speaker }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const talk = speaker.talks[0]
  return (
    <>
      <section className={styles.talk} id={parameterize(talk.title)}>
        <h2 className="title">{talk.title}</h2>
        <p>{talk.desc}</p>
        <button onClick={() => setDialogIsOpen(true)} className="dialogButton">
          {speaker.name}
        </button>
      </section>
      <SpeakerDialog
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        speaker={speaker}
        showLinkToTalk={false}
      />
    </>
  )
}

export default Talk
