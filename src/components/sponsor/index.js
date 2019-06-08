import React from 'react'

import styles from './sponsor.module.css'

const Sponsor = ({ company, level }) => (
  <figure className={styles.sponsor}>
    <a target="_blank" rel="noopener noreferrer" href={company.url}>
      <img src={company.logo} alt={`${company.name} logo`} />
    </a>
    {company.text && <figcaption>{company.text}</figcaption>}
    {level && (
      <figcaption className={level ? styles.level : ''}>{level}</figcaption>
    )}
  </figure>
)

export default Sponsor
