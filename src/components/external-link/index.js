import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ExternalLink = ({ href, text }) => (
  <a href={href} className="link" target="_blank" rel="noopener noreferrer">
    {text}&nbsp;
    <FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden />
  </a>
)

export default ExternalLink
