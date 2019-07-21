import React, { useState } from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import { SpeakerDialog } from '../../components/speaker'

import styles from './schedule.module.css'

const Event = ({ name, time, speakers }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const speaker = speakers.find(s => s.name === name)
  const talk = speaker.talks.find(t => t.year === '2019')
  return (
    <section className={styles.event}>
      <div>
        <h1 className={styles.time}>{time}</h1>
        <details>
          <summary className={styles.title}>{talk.title}</summary>
          <p>{talk.desc}</p>
        </details>
      </div>
      <div>
        <button
          onClick={() => setDialogIsOpen(true)}
          className={styles.dialogButton}
        >
          {name}
        </button>
        <SpeakerDialog
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
          speaker={speaker}
          showLinkToTalk={false}
        />
      </div>
    </section>
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
            <Tab className={styles.tab}>
              <h4 className="subtitle">Friday 8/16</h4>
              <h5>Write / Visibility Day</h5>
            </Tab>
            <Tab className={styles.tab}>
              <h4 className="subtitle">Saturday 8/17</h4>
              <h5>Speak / Leadership Day</h5>
            </Tab>
            <Tab className={styles.tab}>
              <h4 className="subtitle">Sunday 8/19</h4>
              <h5>Code / Project Day</h5>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <section className={styles.event}>
                <h1 className={styles.time}>8:00-9:00am</h1>
                <p className={styles.title}>Breakfast and Registration</p>
              </section>
              <section className={styles.event}>
                <h1 className={styles.time}>9:00-9:20am</h1>
                <p className={styles.title}>Welcome & Code of Conduct</p>
              </section>
              <section className={styles.event}>
                <h1 className={styles.time}>9:30-10:00am</h1>
                <p className={styles.title}>Dana Lawson</p>
              </section>
              <section className={styles.event}>
                <h1 className={styles.time}>10:00-10:30am</h1>
                <p className={styles.title}>Liz Fong-Jones</p>
              </section>
              <section className={styles.event}>
                <h1 className={styles.time}>10:30-11:00am</h1>
                <p className={styles.title}>Sponsor Talk / Mingle / Break</p>
              </section>
              <Tabs>
                <TabList className={styles.subtablist}>
                  <Tab className={styles.subtab}>Write Track</Tab>
                  <Tab className={styles.subtab}>Speak Track</Tab>
                  <Tab className={styles.subtab}>Code Track</Tab>
                  <Tab className={styles.subtab}>Self Track</Tab>
                </TabList>

                <TabPanels className={styles.subtabpanels}>
                  <TabPanel>
                    <section className={styles.event}>
                      <h1 className={styles.time}>11:00-11:50am</h1>
                      <p className={styles.title}>
                        Foundations of Thought Leadership: Reframing your
                        Narrative
                      </p>
                    </section>
                  </TabPanel>
                  <TabPanel>
                    <section className={styles.event}>
                      <h1 className={styles.time}>11:00-11:50am</h1>
                      <p className={styles.title}>
                        Foundations of Thought Leadership: Reframing your
                        Narrative
                      </p>
                    </section>
                  </TabPanel>
                  <TabPanel>
                    <section className={styles.event}>
                      <h1 className={styles.time}>11:00-11:50am</h1>
                      <p className={styles.title}>
                        Foundations of Thought Leadership: Reframing your
                        Narrative
                      </p>
                    </section>
                  </TabPanel>
                  <TabPanel>
                    <Event
                      name="Nikita Rathi"
                      time="11:00-11:20am"
                      speakers={speakers}
                    />
                    <section className={styles.event}>
                      <h1 className={styles.time}>11:30-11:50am</h1>
                      <p className={styles.title}>
                        Making Good Trouble, or: how to affect change without
                        losing your job
                      </p>
                    </section>
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <section className={styles.event}>
                <h1 className={styles.time}>1:00-2:00pm</h1>
                <p className={styles.title}>Lunch</p>
              </section>
              <Event
                name="Aubrey Blanche"
                time="5:20-5:40pm"
                speakers={speakers}
              />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
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
