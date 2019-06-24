import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

import ConfLayout from '../../layouts/conference'
import Sponsors from '../../components/sponsors'
import Hotels from '../../components/hotels'

import styles from './index.module.css'

const Conference2019 = ({ data }) => (
  <ConfLayout>
    <section
      className={styles.section}
      style={{ backgroundColor: '#181c3c', color: 'white' }}
      id="about"
    >
      <div className={styles.row}>
        <div className={styles.content}>
          <h3 className="title">About</h3>
          <h4 className="subtitle">
            What to expect at the Write/Speak/Code conference
          </h4>
          <p>
            Write/Speak/Code is an intensive, 3-day, hands-on conference with
            workshops, personalized feedback sessions, panels, and talks by
            talented technologists with marginalized genders.
          </p>
          <p>
            This year we’ll have four distinct conference tracks &mdash; Write,
            Speak, Code, and Growth. Each day of the conference, you’ll have the
            choice of participating in our core curriculum for writing (Friday),
            speaking (Saturday) or open-source/coding (Sunday) (
            <em>we recommend this for first-time attendees</em>) OR attending
            talks across three other tracks. The choice is yours!
          </p>
          <p>
            Write/Speak/Code’s core curriculum is designed to help you break
            down mental blockers, identify and own your expertise, and build a
            toolkit and body of work around technical blog writing, conference
            speaking, and open source coding. On each day, attendees leave the
            conference having developed blog posts and conference talks, making
            open source contributions, and more. We provide actionable next
            steps and a supportive community to keep attendees accountable to
            the goals they set at the conference and beyond.
          </p>
        </div>
        <aside className={styles.aside}>
          <h4 className="subtitle">Which tracks should I choose?</h4>
          <p>
            If you’ve never been to a W/S/C event or conference before, we
            recommend doing our core curriculum each day or picking one or two
            days to work through the curriculum for the topics you’re most
            excited to learn, expand, and grow in.{' '}
          </p>
          <p>
            For past attendees, the core curriculum is also a great refresher to
            reboot your writing, speaking, and open source contributing
            harddrive!
          </p>
          <a href="#tracks-and-schedule" className="link">
            View tracks & schedule
          </a>
        </aside>
      </div>
    </section>

    <section
      className={styles.photoSection}
      style={{ backgroundColor: '#ea5038', color: 'white' }}
      id="location"
    >
      <div className={styles.row} style={{ position: 'relative' }}>
        <div className={styles.content}>
          <h3 className="title">Venue, Lodging, & Transportation</h3>
          <h4 className="subtitle">
            Palace of Fine Arts
            <br />
            3601 Lyon St, San Francisco, CA 94123
          </h4>
          <Hotels />
          <p>
            We recommend taking a taxi or Lyft/Uber to the conference. It’s a
            beautiful, historic San Francisco building and landmark, but it’s
            unfortunately not on the BART line.
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.488895918175!2d-122.4505230490306!3d37.8020160796551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586d510144681%3A0xe960db8a581aacf5!2sPalace+of+Fine+Arts!5e0!3m2!1sen!2sus!4v1556593751369!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Palace of Fine Arts San Francisco Google Maps"
        />
      </div>
    </section>

    <section
      className={styles.photoSection}
      style={{ backgroundColor: '#181c3c', color: 'white' }}
      id="tracks-and-schedule"
    >
      <div className={styles.row}>
        <Img
          alt="Illustration of a laptop by Maia Boakye"
          fluid={data.laptop.childImageSharp.fluid}
          className={styles.image}
        />
        <div className={styles.content}>
          <h3 className="title">Tracks & Schedule</h3>
          <Tabs>
            <TabList>
              <Tab>Friday</Tab>
              <Tab>Saturday</Tab>
              <Tab>Sunday</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <h4 className="subtitle">Write // Visibility Day</h4>
                <ul>
                  <li>Track 1: Core Write curriculum</li>
                  <li>Track 2: Speak</li>
                  <li>Track 3: Code</li>
                  <li>Track 4: Growth</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h4 className="subtitle">Speak // Leadership Day</h4>
                <ul>
                  <li>Track 1: Core Speak curriculum</li>
                  <li>Track 2: Write</li>
                  <li>Track 3: Code</li>
                  <li>Track 4: Growth</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h4 className="subtitle">Code // Project Day</h4>
                <ul>
                  <li>Track 1: Core Code curriculum</li>
                  <li>Track 2: Write</li>
                  <li>Track 3: Speak</li>
                  <li>Track 4: Growth</li>
                </ul>
              </TabPanel>
            </TabPanels>
          </Tabs>

          {/*
          <Link className="link" to={`/2019/schedule`}>
            View Schedule
          </Link>
          */}
          <em>Full schedule coming soon</em>
        </div>
      </div>
    </section>
    {/*
    <section
      className={styles.section}
      style={{ backgroundColor: '#f5d2c6', color: 'var(--navy)' }}
    >
      <div className={styles.content}>
        <h3 className="title">Title</h3>
        <h4 className="subtitle">Subtitle</h4>
        <p>content</p>
      </div>
    </section>
      */}
    <section
      className={styles.photoSection}
      style={{ backgroundColor: '#f5d2c6', color: 'var(--navy)' }}
    >
      <div className={styles.row}>
        <div className={styles.content}>
          <h3 className="title">Title</h3>
          <h4 className="subtitle">Subtitle</h4>
          <p>content</p>
        </div>
        <Img
          alt="Illustration of people by Maia Boakye"
          fluid={data.people.childImageSharp.fluid}
          className={styles.image}
        />
      </div>
    </section>

    <Sponsors isConference={true} />
  </ConfLayout>
)

export default Conference2019

export const pageQuery = graphql`
  query {
    people: file(relativePath: { eq: "illustrations/2019-people.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    laptop: file(relativePath: { eq: "illustrations/2019-laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
