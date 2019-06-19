import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import Footer from '../../components/footer'
import SEO from '../../components/seo'
import Sponsors from '../../components/sponsors'

import styles from './index.module.css'

const Conference2019 = ({ data }) => (
  <>
    <SEO
      keywords={[`tech`, `diversity`, `conference`]}
      title="2019 Conference"
    />
    <header className={styles.header}>
      <Link to="/">
        <VisuallyHidden>Write Speak Code Home</VisuallyHidden>
        <Img
          fixed={data.logo.childImageSharp.fixed}
          alt="Write/Speak/Code logo"
        />
      </Link>
      <div>
        <VisuallyHidden>Write Speak Code 2019 Conference</VisuallyHidden>
        <h2 className="subtitle">
          August 16&ndash;18, 2019 / San Francisco, CA
        </h2>
        <a href="https://eventbrite.com">Get tickets</a>
      </div>
    </header>

    <Img
      alt="Illustration of San Francisco by Maia Boakye"
      fluid={data.sf.childImageSharp.fluid}
      className={styles.image}
    />

    <main className={styles.main}>
      <section
        className={styles.section}
        style={{ backgroundColor: '#181c3c', color: 'white', display: 'flex' }}
      >
        <div className={styles.content}>
          <h3 className="title">About</h3>
          <h4 className="subtitle">
            Write/Speak/Code is an intensive, three-day, hands-on conference
            with workshops, personalized feedback sessions, panels, and talks by
            talented technologists with marginalized genders.
          </h4>
          <p>
            Each day of the conference is themed: Write/Visibility Day,
            Speak/Leadership Day, Code/Project Day and Growth. Attendees leave
            the conference having developed blog posts, conference talks, open
            source contributions, and more. We provide actionable next steps and
            a supportive community to keep attendees accountable to the goals
            they set at the conference and beyond.
          </p>
        </div>
        <div>
          <ul>
            Our conference features two tracks:
            <li>
              Foundations features our original Write/Speak/Code curriculum
              designed to launch you into the next step of thought leadership,
              conference speaking, or open source coding. This is a guided track
              that will have individual, pair, and small group exercises as well
              as panels and lectures. Each day will end with the creation of a
              deliverable: a blog post draft, give a talk, and create a Pull
              Request! This track is great for anyone who is new to writing,
              speaking, or coding or those in transition (moving from individual
              contributor to lead, re-entering after time off, changing focus
              areas etc).
            </li>
            <li>
              Explorations will include talks, facilitated curriculum, and hands
              on workshops each day. Workshops will culminate in creating a
              deliverable based on the day's theme (for example, a technical
              zine or an outline for a workshop you can give). This track is
              great for anyone who has attended our conference in the past, or
              who feels confident in writing, speaking, and coding from their
              current expertise.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div
          className={styles.row}
          style={{ backgroundColor: '#ea5038', color: 'white' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.488895918175!2d-122.4505230490306!3d37.8020160796551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586d510144681%3A0xe960db8a581aacf5!2sPalace+of+Fine+Arts!5e0!3m2!1sen!2sus!4v1556593751369!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen
            title="Palace of Fine Arts San Francisco Google Maps"
          />
          <div className={styles.content}>
            <h3 className="title">Location</h3>
            <h4 className="subtitle">Palace of Fine Arts</h4>
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div
          className={styles.row}
          style={{ backgroundColor: '#181c3c', color: 'white' }}
        >
          <Img
            alt="Illustration of a laptop by Maia Boakye"
            fluid={data.laptop.childImageSharp.fluid}
            className={styles.image}
          />
        </div>
      </section>

      <section className={styles.photoSection}>
        <div
          className={styles.row}
          style={{ backgroundColor: '#f5d2c6', color: 'white' }}
        >
          <Img
            alt="Illustration of a laptop by Maia Boakye"
            fluid={data.people.childImageSharp.fluid}
            className={styles.image}
          />
        </div>
      </section>

      <Sponsors />
    </main>
    <Footer />
  </>
)

export default Conference2019

export const pageQuery = graphql`
  query {
    sf: file(relativePath: { eq: "illustrations/2019-sf.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
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
    logo: file(
      relativePath: { eq: "logos/wsc-horizontallogo-onecolor-blue.png" }
    ) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
