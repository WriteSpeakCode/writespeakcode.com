import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import Organizer from '../organizer'
import styles from './organizers.module.css'

const Organizers = ({organizers}) => {
  const boardMembers = _.filter(organizers, function(o) { return _.includes(o.role, 'Board Member') })
  const chapterLeaders = _.filter(organizers, function(o) { return _.includes(o.role, 'Chapter Organizer') })
  const conferenceOrganizers = _.filter(organizers, function(o) { return _.includes(o.role, 'Conference Organizer') })
  const websiteContributors = _.filter(organizers, function(o) { return _.includes(o.role, 'Website Contributor') })  

  return (
    <section id="about" className={styles.aboutUs}>
        <div className={styles.wrap}>
          <section>
            <h3 className={styles.heading}>Board Members</h3>
            <div className={styles.grid}>
              {boardMembers.map(boardMember => (
                <Organizer organizer={boardMember} />
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Chapter Leaders</h3>
            <div className={styles.grid}>
              {chapterLeaders.map(chapterLeader => (
                <Organizer organizer={chapterLeader}/>
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Conference Organizers</h3>
            <div className={styles.grid}>
              {conferenceOrganizers.map(conferenceOrganizer => (
                <Organizer organizer={conferenceOrganizer}/>
              ))}
            </div>
          </section>
          <section>
            <h3 className={styles.heading}>Website Contributors</h3>
            <div className={styles.grid}>
              {websiteContributors.map(websiteContributor => (
                <Organizer organizer={websiteContributor}/>
              ))}
            </div>
          </section>
        </div>
    </section>
  )
};

export default Organizers