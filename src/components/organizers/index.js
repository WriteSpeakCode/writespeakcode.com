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
    </section>
  )
};

export default Organizers