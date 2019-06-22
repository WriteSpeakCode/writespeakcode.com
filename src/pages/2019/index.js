import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import ConfLayout from '../../layouts/conference'
import Sponsors from '../../components/sponsors'
import Hotels from '../../components/hotels'

import styles from './index.module.css'

const Conference2019 = ({ data }) => (
  <ConfLayout>
    <section style={{ backgroundColor: '#181c3c', color: 'white' }}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h3 className="title">About</h3>
          <h4 className="subtitle">
            What to Expect at the Write/Speak/Code Conference
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
        </div>
      </div>
    </section>

    <section
      className={styles.photoSection}
      style={{ backgroundColor: '#ea5038', color: 'white' }}
    >
      <div className={styles.row}>
        <div className={styles.content}>
          <h3 className="title">Venue & Transportation</h3>
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
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.488895918175!2d-122.4505230490306!3d37.8020160796551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586d510144681%3A0xe960db8a581aacf5!2sPalace+of+Fine+Arts!5e0!3m2!1sen!2sus!4v1556593751369!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Palace of Fine Arts San Francisco Google Maps"
          />
        </div>
      </div>
    </section>

    <section
      className={styles.photoSection}
      style={{ backgroundColor: '#181c3c', color: 'white' }}
    >
      <div className={styles.row}>
        <Img
          alt="Illustration of a laptop by Maia Boakye"
          fluid={data.laptop.childImageSharp.fluid}
          className={styles.image}
        />
        <div className={styles.content}>
          <h3 className="title">Title</h3>
          <h4 className="subtitle">Subtitle</h4>
          <p>content</p>
        </div>
      </div>
    </section>

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
