import React from 'react'
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false
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
      <FontAwesomeIcon icon={setIcon()} aria-hidden />
    </a>
  )
}
