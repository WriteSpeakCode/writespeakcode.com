import React from 'react'

import Organizer from '../organizer'

import styles from './organizers.module.css'

const Organizers = ({data}) => {
  const boardMembers = []
  const chapterLeaders = []
  const conferenceOrganizers = []
  const websiteContributors = []

  return (
    <section id="about" className={styles.aboutUs}>
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.info}>
            <h1 className="title">About Us</h1>
            <h2 className="subtitle">
              Meet the hard-working organizers behind Write/Speak/Code.
            </h2>
            <p>
              Contact us at info@writespeakcode.com to learn how you can join our organizing team.
            </p>
          </div>
        </div>
        <div className={styles.wrap}>
          <section>
            <h3 className={styles.heading}>Board Members</h3>
            <div className={styles.grid}>
              {boardMembers.map(boardMember => (
                <Organizer />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Chapter Leaders</h3>
            <div className={styles.grid}>
              {chapterLeaders.map(chapterLeader => (
                <Organizer />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Conference Organizers</h3>
            <div className={styles.grid}>
              {conferenceOrganizers.map(conferenceOrganizer => (
                <Organizer />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Website Contributors</h3>
            <div className={styles.grid}>
              {websiteContributors.map(websiteContributor => (
                <Organizer />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
};

export default Organizers