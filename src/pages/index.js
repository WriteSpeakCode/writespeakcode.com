import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import HomeLayout from '../layouts/home'
import SEO from '../components/seo'
import Sponsors from '../components/sponsors'

import styles from './index.module.css'

const IndexPage = ({ data }) => (
  <HomeLayout>
    <SEO keywords={[`tech`, `diversity`, `conference`]} />

    <section
      id="community"
      className={[styles.photoSection, styles.community].join(' ')}
    >
      <Img
        alt="2018 conference-goers pose for a photo together in front of the Write Speak Code banner"
        fluid={data.community.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className="title">Community</h1>
        <p>
          Our community is open to and our content is designed for people whose
          gender or gender history is marginalized within tech. We define those
          gender groups as:{' '}
        </p>
        <ul>
          <li>All women technologists (trans, non-binary, and cis) </li>
          <li>
            All trans technologists (trans women, trans men, and trans
            non-binary folks)
          </li>
          <li>
            All non-binary technologists (including GNC, gender-fluid,
            genderqueer, agender folks, etc)
          </li>
        </ul>
        <p>
          We want to equip people from these groups to overcome both the
          internal and external effects of that marginalization by identifying,
          expanding, and sharing their expertise with the support of an engaged
          peer network.
        </p>
        <Link to="/code-of-conduct/" className="link">
          Read the code of conduct
        </Link>
      </div>
    </section>

    <section
      id="conference"
      className={[styles.photoSection, styles.conference].join(' ')}
    >
      <Img
        alt="A panel of speakers on stage at the 2018 conference"
        fluid={data.conf.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className="title">Annual Conference</h1>
        <h2 className="subtitle">
          August 16&ndash;18, 2019 <br />
          Palace of Fine Arts &mdash; San Francisco, CA
        </h2>
        <p>
          Join us for three days designed to fully own your expertise through
          writing, speaking, and open source.
        </p>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://writespeakcode-2019conference.eventbrite.com/"
        >
          Get tickets
        </a>
      </div>
    </section>

    <section
      id="own-your-expertise"
      className={[styles.photoSection, styles.oye].join(' ')}
    >
      <Img
        alt="A smiling speaker talks on stage at the 2019 conference with a microphone."
        fluid={data.oye.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
        className={styles.image}
      />
      <div className={styles.content}>
        {' '}
        <h1 className="title">Own Your Expertise</h1>
        <h2 className="subtitle">
          Present your accomplishments with confidence.
        </h2>
        <p>
          Learn to understand, own, and convert your expertise into thought
          leadership, conference speaking, and contributions to open source.
        </p>
        <p>
          We provide breakfast and lunch for all dietary needs, wheelchair
          accessible location, nursing rooms and childcare services, CART/ASL
          services, and other accessibility needs as requested.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.meetup.com/pro/writespeakcode/"
          className="link"
        >
          Find events on Meetup
        </a>
      </div>
    </section>

    <section
      id="chapters"
      className={[styles.photoSection, styles.chapters].join(' ')}
    >
      <Img
        alt="A woman sitting at a table in the audience raises her hand to ask a question."
        fluid={data.chapters.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className="title">Local Chapters</h1>
        <h2 className="subtitle">We host events and full-day workshops.</h2>
        <p>
          We have communities in cities across the U.S., including{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/Write-Speak-Code-Austin/"
          >
            Austin
          </a>
          ,{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/WriteSpeakCode-Chicago"
          >
            Chicago
          </a>
          ,{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/Write-Speak-Code-Los-Angeles"
          >
            Los Angeles
          </a>
          ,{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/Write-Speak-Code-NYC/"
          >
            New York City
          </a>
          ,{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/WriteSpeakCode-SFBay/"
          >
            San Francisco
          </a>
          , and{' '}
          <a
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.meetup.com/WSC-Seattle"
          >
            Seattle
          </a>
          .
        </p>
        <p>
          Don't see your city? Contact{' '}
          <span className="italic">info@writespeakcode.com</span> to learn how
          we can help you start a chapter.
        </p>
      </div>
    </section>

    <Sponsors />
  </HomeLayout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 3600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    conf: file(relativePath: { eq: "photos/WSC-NY-211.jpg" }) {
      ...fluidImage
    }
    oye: file(relativePath: { eq: "photos/WSC-NY-577.jpg" }) {
      ...fluidImage
    }
    chapters: file(relativePath: { eq: "photos/WSC-178.jpg" }) {
      ...fluidImage
    }
    community: file(relativePath: { eq: "photos/WSC-NY-590.jpg" }) {
      ...fluidImage
    }
  }
`
