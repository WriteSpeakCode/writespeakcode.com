import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import Event from '../../components/event'
import { parameterize } from '../../utils/helpers'

import styles from './schedule.module.css'

import schedule from '../../../content/2019/schedule.json'

// TODO: Add unique key for tab
const Tracks = ({ tracks, speakers, day }) => {
  return (
    <Tabs className={styles.subTabs}>
      <TabList className={styles.subTabList}>
        {tracks.map(track => (
          <Tab className={styles.subTab}>
            <h1 className={styles.tabTitle}>{track.title}</h1>
          </Tab>
        ))}
      </TabList>

      <TabPanels className={styles.subTabPanels}>
        {tracks.map(track => (
          <TabPanel>
            {track.events.map(event => (
              <Event
                {...event}
                speakers={speakers}
                key={`event-${parameterize(day.date)}-${parameterize(
                  event.time
                )}`}
              />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

const Schedule = ({ data }) => {
  const speakers = data.allSpeakersJson.nodes

  return (
    <ConfLayout subpage={true}>
      <SEO title="Schedule | 2019 Conference" />
      <section className={styles.schedule}>
        <h1 className="title">Schedule</h1>
        <h2 className="subtitle">
          Each day, participate in our core curriculum for writing, speaking and
          open-source/coding or attend talks across three other tracks. The
          choice is yours!
        </h2>
        <Tabs className={styles.tabs}>
          <TabList className={styles.tablist}>
            {schedule.map(day => (
              <Tab className={styles.tab} key={`tab-${parameterize(day.date)}`}>
                <h1 className={styles.tabTitle}>{day.title}</h1>
              </Tab>
            ))}
          </TabList>

          <TabPanels className={styles.tabPanels}>
            {schedule.map(day => (
              <TabPanel key={`panel-${parameterize(day.date)}`}>
                <div className={styles.day}>
                  <h2 className="subtitle">{day.date}</h2>
                </div>

                {day.events.map((event, index) =>
                  event.tracks ? (
                    <Tracks
                      tracks={event.tracks}
                      speakers={speakers}
                      day={day}
                      key={`track-${parameterize(day.date)}-${index}`}
                    />
                  ) : (
                    <Event
                      {...event}
                      speakers={speakers}
                      day={day}
                      key={`event-${parameterize(day.date)}-${parameterize(
                        event.time
                      )}`}
                    />
                  )
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </section>
    </ConfLayout>
  )
}

export default Schedule

export const scheduleQuery = graphql`
  query {
    allSpeakersJson(filter: { years: { in: "2019" } }) {
      nodes {
        id
        name
        role
        headshot
        company
        bio
        pronouns
        links {
          type
          url
        }
        talks {
          title
          desc
          type
          year
        }
      }
    }
  }
`
