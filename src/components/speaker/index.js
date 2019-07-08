import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Dialog } from '@reach/dialog'
import VisuallyHidden from '@reach/visually-hidden'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { parameterize } from '../../utils/helpers'

import styles from './speaker.module.css'

const SocialLink = ({ type, url }) => {
  const icons = {
    twitter: faTwitter,
    linkedin: faLinkedinIn,
    github: faGithub,
  }
  const urls = {
    twitter: `https://twitter.com/${url}`,
    linkedin: `https://linkedin.com/in/${url}`,
    github: `https://github.com/${url}`,
    website: url,
  }
  return (
    <a
      href={urls[type]}
      target="_blank"
      rel="noopener noreferrer"
      className={type === 'website' ? 'link' : styles.icon}
    >
      {type === 'website' ? url : <FontAwesomeIcon icon={icons[type]} />}
    </a>
  )
}

export const SpeakerDialog = ({
  open,
  speaker,
  dialogIsOpen,
  setDialogIsOpen,
  showLinkToTalk,
}) => (
  <Dialog
    isOpen={dialogIsOpen}
    onDismiss={() => setDialogIsOpen(false)}
    className={styles.dialog}
  >
    <button className={styles.close} onClick={() => setDialogIsOpen(false)}>
      <VisuallyHidden>Close</VisuallyHidden>
      <FontAwesomeIcon icon={faTimes} className={styles.menuButton} />
    </button>

    <figure>
      <img
        src={speaker.headshot ? speaker.headshot : randomPlaceholder()}
        alt={`${speaker.name} headshot`}
      />
      <figcaption>
        <h1 className="title">
          {speaker.name} {speaker.pronouns && <span>({speaker.pronouns})</span>}
        </h1>
        {speaker.role && <h2 className="subtitle">{speaker.role}</h2>}
        {speaker.company && <h3>{speaker.company}</h3>}
      </figcaption>
    </figure>
    <p>{speaker.bio}</p>
    <div className={styles.links}>
      {speaker.links &&
        speaker.links.map((link, index) => (
          <SocialLink type={link.type} url={link.url} key={index} />
        ))}
    </div>
    <div className={styles.links}>
      {speaker.talks &&
        showLinkToTalk &&
        speaker.talks.map(talk => (
          <>
            <span>{talk.type}: </span>
            <Link
              to={`/2019/program/#${parameterize(talk.title)}`}
              className="link"
            >
              {talk.title}
            </Link>
          </>
        ))}
    </div>
  </Dialog>
)

const randomPlaceholder = () => {
  const placeholders = [
    '/images/speaker.jpg',
    '/images/speaker2.jpg',
    '/images/speaker3.jpg',
  ]
  return placeholders[Math.floor(Math.random() * placeholders.length)]
}

const Speaker = ({ speaker }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  return (
    <>
      <figure className={styles.speaker} onClick={() => setDialogIsOpen(true)}>
        <img
          src={speaker.headshot ? speaker.headshot : randomPlaceholder()}
          alt={`${speaker.name} headshot`}
          className={styles.headshot}
        />
        <figcaption>
          <h3>{speaker.name}</h3>
          {speaker.role && <h4>{speaker.role}</h4>}
          {speaker.company && <h5>{speaker.company}</h5>}
        </figcaption>
      </figure>
      <SpeakerDialog
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        speaker={speaker}
        showLinkToTalk={true}
      />
    </>
  )
}

export default Speaker
