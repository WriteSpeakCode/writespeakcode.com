import React, { useState } from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'
import { SpeakerDialog } from '../../components/speaker'

import styles from './schedule.module.css'

const Event = ({ name, time, speakers, title, additionalNames }) => {
  if (!speakers) {
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
          <div className={styles.grid}>
            <details>
              <summary>
                <h3 className={styles.title}>{talk.title}</h3>
              </summary>
              <p>{talk.desc}</p>
            </details>

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
              <h1 className={styles.tabTitle}>Write / Visibility Day</h1>
            </Tab>
            <Tab className={styles.tab}>
              <h1 className={styles.tabTitle}>Speak / Leadership Day</h1>
            </Tab>
            <Tab className={styles.tab}>
              <h1 className={styles.tabTitle}>Code / Project Day</h1>
            </Tab>
          </TabList>

          <TabPanels className={styles.tabPanels}>
            <TabPanel>
              <div className={styles.day}>
                <h2 className="subtitle">Fri Aug 18, 2019</h2>
              </div>

              <Event title="Breakfast & Registration" time="8:00 AM" />
              <Event title="Welcome & Code of Conduct" time="9:00 AM" />

              <Event name="Dana Lawson" time="9:30 AM" speakers={speakers} />
              <Event
                name="Liz Fong-Jones"
                time="10:00 AM"
                speakers={speakers}
              />

              <Event title="Sponsor Talk / Mingle / Break" time="10:30 AM" />

              <Tabs className={styles.subTabs}>
                <TabList className={styles.subTabList}>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Write Track</h4>
                  </Tab>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Speak Track</h4>
                  </Tab>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Code Track</h4>
                  </Tab>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Self Track</h4>
                  </Tab>
                </TabList>

                <TabPanels className={styles.subTabPanels}>
                  <TabPanel>
                    <Event
                      title="Foundations of Thought Leadership: Reframing your Narrative"
                      time="11:00 AM"
                    />
                    <Event
                      title="No Blank Spaces: Tapping Into Our Expertise"
                      time="12:10 PM"
                    />
                  </TabPanel>
                  <TabPanel>
                    <Event
                      title="Foundations of Thought Leadership: Reframing your Narrative"
                      time="11:00 AM"
                    />
                    <Event
                      name="Lilah Sturges"
                      time="12:00 PM"
                      speakers={speakers}
                    />
                    <Event
                      name="Eileen Whitener"
                      time="12:30 PM"
                      speakers={speakers}
                    />
                  </TabPanel>
                  <TabPanel>
                    <Event
                      title="Foundations of Thought Leadership: Reframing your Narrative"
                      time="11:00 AM"
                    />
                    <Event
                      name="Patricia Realini"
                      time="12:00 PM"
                      speakers={speakers}
                    />
                    <Event
                      name="Karina Kotval"
                      time="12:30 PM"
                      speakers={speakers}
                    />
                  </TabPanel>
                  <TabPanel>
                    <Event
                      name="Nikita Rathi"
                      time="11:00 AM"
                      speakers={speakers}
                      additionalNames={['Katrina Bakas']}
                    />
                    <Event
                      name="Duretti Hirpa"
                      time="11:30 AM"
                      speakers={speakers}
                    />
                    <Event
                      name="Nancy Hawa"
                      time="12:00 PM"
                      speakers={speakers}
                    />
                    <Event
                      name="Nicole Leffel"
                      time="12:30 PM"
                      speakers={speakers}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Event title="Lunch" time="1:00 PM" />

              <Tabs className={styles.subTabs}>
                <TabList className={styles.subTabList}>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Write Track</h4>
                  </Tab>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Speak Track</h4>
                  </Tab>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Code Track</h4>
                  </Tab>
                  <Tab className={styles.subTab}>
                    <h4 className={styles.tabTitle}>Self Track</h4>
                  </Tab>
                </TabList>

                <TabPanels className={styles.subTabPanels}>
                  <TabPanel>
                    <Event title="Publishers Panel" time="2:00 PM" />
                    <Event title="Curriculum" time="3:00 PM" />
                  </TabPanel>
                  <TabPanel>
                    <Event title="Improv" time="2:00 PM" />
                  </TabPanel>
                  <TabPanel>
                    <Event
                      name="Eva PenzeyMoog"
                      time="2:00 PM"
                      speakers={speakers}
                    />
                    <Event
                      name="M. K. Fain"
                      time="2:30 PM"
                      speakers={speakers}
                    />
                    <Event
                      name="Anastasia Santasheva"
                      time="3:00 PM"
                      speakers={speakers}
                    />
                    <Event
                      name="Lexi Galantino"
                      time="3:30 PM"
                      speakers={speakers}
                    />
                  </TabPanel>
                  <TabPanel>
                    <Event
                      name="Neem Serra"
                      time="2:00 PM"
                      speakers={speakers}
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Event title="Snacks & Sponsor Mingling" time="4:00 PM" />
              <Event title="Sponsor Talk" time="5:00 PM" />
              <Event title="Sponsor Talk" time="5:10 PM" />
              <Event name="Aubrey Blanche" time="5:20 PM" speakers={speakers} />
              <Event title="Announcements & Feedback" time="5:40 PM" />
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
