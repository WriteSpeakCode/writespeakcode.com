import React, { useState } from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import { SpeakerDialog } from '../../components/speaker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faVolumeUp,
  faFire,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

import styles from './schedule.module.css'

import schedule from '../../../content/2019/schedule.json'

const Event = ({ name, time, speakers, title, additionalNames }) => {
  const talkIcons = {
    workshop: faLaptopCode,
    talk: faVolumeUp,
    'fireside chat': faFire,
    keynote: faStar,
  }
  if (!name) {
    return (
      <section className={styles.event}>
        <div>
          <span className={styles.time}>{time}</span>
          <div className={styles.grid}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
      </section>
    )
  } else {
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    const speaker = speakers.find(s => s.name === name)
    const allSpeakers = [speaker]
    const talk = speaker.talks.find(t => t.year === '2019')
    if (additionalNames) {
      additionalNames.map(name =>
        allSpeakers.push(speakers.find(s => s.name === name))
      )
    }

    return (
      <section className={styles.event}>
        <div>
          <span className={styles.time}>{time}</span>
          <span
            style={{
              fontSize: '.8em',
              margin: '0 .5em',
              color: 'var(--tan)',
            }}
          >
            <FontAwesomeIcon
              icon={talkIcons[talk.type]}
              style={{ margin: '0 .5em' }}
            />
            {talk.type}
          </span>
          <div className={styles.grid}>
            {!talk.desc && (
              <div className={styles.grid}>
                <h3 className={styles.title}>{talk.title}</h3>
              </div>
            )}

            {talk.desc && (
              <details>
                <summary>
                  <h3 className={styles.title}>{talk.title}</h3>
                </summary>
                <p>{talk.desc}</p>
              </details>
            )}

            <div>
              {allSpeakers.map(s => (
                <span className={styles.speakerBtn} key={s.name}>
                  <button
                    onClick={() => setDialogIsOpen(true)}
                    className={styles.dialogButton}
                  >
                    {s.name}
                  </button>
                  <SpeakerDialog
                    dialogIsOpen={dialogIsOpen}
                    setDialogIsOpen={setDialogIsOpen}
                    speaker={s}
                    showLinkToTalk={false}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const Tracks = ({ tracks, speakers }) => {
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
                name={event.name}
                title={event.title}
                time={event.time}
                additionalNames={event.additionalNames}
                speakers={speakers}
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
        <Tabs>
          <TabList className={styles.tablist}>
            {schedule.map(day => (
              <Tab className={styles.tab}>
                <h1 className={styles.tabTitle}>{day.title}</h1>
              </Tab>
            ))}
          </TabList>

          <TabPanels className={styles.tabPanels}>
            {schedule.map(day => (
              <TabPanel>
                <div className={styles.day}>
                  <h2 className="subtitle">{day.date}</h2>
                </div>

                {day.events.map(event =>
                  event.tracks ? (
                    <Tracks tracks={event.tracks} speakers={speakers} />
                  ) : (
                    <Event
                      name={event.name}
                      title={event.title}
                      time={event.time}
                      additionalNames={event.additionalNames}
                      speakers={speakers}
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
