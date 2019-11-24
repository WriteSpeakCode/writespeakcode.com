import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { faMousePointer } from '@fortawesome/free-solid-svg-icons'
import styles from './organizer.module.css'


const SocialLink = ({ type, url }) => {
  const icons = {
    twitter: faTwitter,
    linkedin: faLinkedinIn,
    github: faGithub,
    website: faMousePointer
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
      className={styles.icon}
    >
      <FontAwesomeIcon icon={icons[type]} />
    </a>
  )
}

const randomPlaceholder = () => {
  const placeholders = [
    '/images/speaker.jpg',
    '/images/speaker2.jpg',
    '/images/speaker3.jpg',
  ]
  return placeholders[Math.floor(Math.random() * placeholders.length)]
}


const Organizer = ({ organizer }) => {
  // const [dialogIsOpen, setDialogIsOpen] = useState(false)
  return (
    <>
      <figure className={styles.organizer}>
        <img
          src={organizer.headshot ? organizer.headshot : randomPlaceholder()}
          alt={`${organizer.name} headshot`}
          className={styles.headshot}
        />
        <figcaption>
          <h3>{organizer.name}</h3>
          {organizer.role && <h4>{organizer.pronouns}</h4>}
          {organizer.city && <h5>{organizer.city}</h5>}
          <div className={styles.links}>
            {organizer.links &&
              organizer.links.map((link, index) => (
              <SocialLink type={link.type} url={link.url} key={index} />
            ))}
      </div>
        </figcaption>
      </figure>
      {/* <organizerDialog
        dialogIsOpen={dialogIsOpen}
        setDialogIsOpen={setDialogIsOpen}
        organizer={organizer}
        showLinkToTalk={true}
      /> */}
    </>
  )
}

export default Organizer