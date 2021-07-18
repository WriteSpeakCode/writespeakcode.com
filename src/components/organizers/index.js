import React from 'react'

import styles from './organizers.module.css'

export const Organizer = ({ organizer }) => {
  const person = organizer.node
  return (
    <figure className={styles.person}>
      <img src={person.headshot} alt={`${person.name} headshot`} />
      <figcaption>
        <h3>{person.name}</h3>
        <h4>{person.pronouns}</h4>
      </figcaption>
    </figure>
  )
}

const Organizers = ({ organizers }) => (
  <section className="container padding">
    <h1 className="title">Meet the Organizers</h1>
    <div className={styles.grid}>
      {organizers.map(person => (
        <Organizer organizer={person} />
      ))}
    </div>
  </section>
)
export default Organizers
