import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import VisuallyHidden from '@reach/visually-hidden'

import Footer from '../../components/footer'
import SEO from '../../components/seo'
import Sponsors from '../../components/sponsors'
import Hotels from '../../components/hotels'

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
          className={styles.logo}
        />
      </Link>
      <div className={styles.info}>
        <VisuallyHidden>Write Speak Code 2019 Conference</VisuallyHidden>
        <h2 className="subtitle">
          August 16&ndash;18, 2019 / San Francisco, CA
        </h2>
        <a
          href="https://www.eventbrite.com/e/writespeakcode-2019-conference-tickets-58347757714"
          rel="noopener noreferrer"
          target="_blank"
        >
          Register Now
        </a>
      </div>
    </header>

    <Img
      alt="Illustration of San Francisco by Maia Boakye"
      fluid={data.sf.childImageSharp.fluid}
      className={styles.heroImage}
    />

    <main className={styles.main}>
      <section style={{ backgroundColor: '#181c3c', color: 'white' }}>
        <div className={styles.section}>
          <div className={styles.content}>
            <h3 className="title">About</h3>
            <h4 className="subtitle">
              Write/Speak/Code is an intensive, three-day, hands-on conference
              with workshops, personalized feedback sessions, panels, and talks
              by talented technologists with marginalized genders.
            </h4>
            <p>
              Each day of the conference is themed: Write/Visibility Day,
              Speak/Leadership Day, Code/Project Day and Growth. Attendees leave
              the conference having developed blog posts, conference talks, open
              source contributions, and more. We provide actionable next steps
              and a supportive community to keep attendees accountable to the
              goals they set at the conference and beyond.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.photoSection}
        style={{ backgroundColor: '#ea5038', color: 'white' }}
      >
        <div className={styles.row}>
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
            <h4 className="subtitle">
              Palace of Fine Arts
              <br />
              3601 Lyon St, San Francisco, CA 94123
            </h4>
            <Hotels />
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
        </div>
      </section>

      <section
        className={styles.photoSection}
        style={{ backgroundColor: '#f5d2c6', color: 'white' }}
      >
        <div className={styles.row}>
          <Img
            alt="Illustration of a laptop by Maia Boakye"
            fluid={data.people.childImageSharp.fluid}
            className={styles.image}
          />
        </div>
      </section>

      <Sponsors isConference={true} />
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
