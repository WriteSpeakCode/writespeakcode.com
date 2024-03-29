import React, { useState } from 'react'
import { Dialog } from '@reach/dialog'

import '@reach/dialog/styles.css'
import styles from './sponsor.module.css'

const Sponsor = ({ company, level }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <figure className={styles.sponsor}>
        <a target="_blank" rel="noopener noreferrer" href={company.url}>
          <img src={company.logo} alt={`${company.name} logo`} />
        </a>
        {company.text && level !== 'Platinum' && (
          <button onClick={() => setDialogIsOpen(true)}>read more</button>
        )}
        {level === 'Platinum' && (
          <figcaption dangerouslySetInnerHTML={{ __html: company.text }} />
        )}
        {level && level !== 'Platinum' && (
          <figcaption className={level ? styles.level : ''}>{level}</figcaption>
        )}
      </figure>
      {company.text && (
        <Dialog isOpen={dialogIsOpen} onDismiss={() => setDialogIsOpen(false)}>
          <p dangerouslySetInnerHTML={{ __html: company.text }} />
        </Dialog>
      )}
    </>
  )
}

export default Sponsor
