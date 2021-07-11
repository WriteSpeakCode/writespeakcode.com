import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faMeetup } from '@fortawesome/free-brands-svg-icons'

export const ExternalLink = ({ href, text, icon }) => {
  function setIcon() {
    switch (icon) {
      case 'pdf':
        return faFilePdf
      case 'meetup':
        return faMeetup
      default:
        return faExternalLinkAlt
    }
  }

  return (
    <a href={href} className="link" target="_blank" rel="noopener noreferrer">
      {text}&nbsp;
      <span style={{ display: 'inlineBlock', maxWidth: '1em' }}>
        <FontAwesomeIcon icon={setIcon()} aria-hidden />
      </span>
    </a>
  )
}
