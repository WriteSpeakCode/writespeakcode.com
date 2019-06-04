import React from 'react'
import { Link, graphql } from 'gatsby'

import HomeLayout from '../layouts/home'
import SEO from '../components/seo'
import Section from '../components/section'
import Sponsors from '../components/sponsors'

import styles from './index.module.css'

const IndexPage = props => (
  <HomeLayout>
    <SEO keywords={[`tech`, `diversity`, `conference`]} />
    <Section
      img={props.data.community.childImageSharp.fluid}
      imgAlt="2018 conference-goers pose for a photo together in front of the Write Speak Code banner"
      imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
      id="community"
      sectionStyle={{
        background:
          'linear-gradient(to top left, var(--white) 70%, var(--orange) 70%)',
      }}
    >
      <h1 className={styles.title}>Community</h1>
      <p>
        Our community is open to and our content is designed for people whose
        gender or gender history is marginalized within tech. We define those
        gender groups as:{' '}
      </p>
      <ul>
        <li>All women technologists (trans, non-binary, and cis) </li>
        <li>
          All trans technologists (trans women, trans men, and trans non-binary
          folks)
        </li>
        <li>
          All non-binary technologists (including GNC, gender-fluid,
          genderqueer, agender folks, etc)
        </li>
      </ul>
      <p>
        We want to equip people from these groups to overcome both the internal
        and external effects of that marginalization by identifying, expanding,
        and sharing their expertise with the support of an engaged peer network.
      </p>
      <Link to="/code-of-conduct/" className="link">
        Read the code of conduct
      </Link>
    </Section>

    <Section
      img={props.data.conferences.childImageSharp.fluid}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
      imgAlt="A panel of speakers on stage at the 2018 conference"
      id="conference"
      sectionStyle={{
        background:
          'linear-gradient(to bottom right, var(--white) 50%, var(--mint) 50%)',
      }}
      contentStyle={{ alignSelf: 'flex-start' }}
    >
      <h1 className={styles.title}>Annual Conference</h1>
      <h2 className={styles.subtitle}>
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
        Get Tickets
      </a>
    </Section>

    <Section
      imgAlt="A conference attendee raises her hand while sitting at a round table of people taking notes and using laptops."
      img={props.data.oye.childImageSharp.fluid}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
      id="own-your-expertise"
      sectionStyle={{
        background: 'var(--navy)',
        color: 'var(--white)',
      }}
    >
      <h1 className={styles.title}>Own Your Expertise</h1>
      <h2 className={styles.subtitle}>
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
    </Section>

    <Section
      img={props.data.chapters.childImageSharp.fluid}
      imgAlt="People collaborate on their laptops at a Write Speak Code event."
      imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
      id="chapters"
      sectionStyle={{
        background:
          'linear-gradient(to top right, var(--white) 50%, var(--blush) 50%)',
      }}
      contentStyle={{ alignSelf: 'flex-end' }}
    >
      <h1 className={styles.title}>Local Chapters</h1>
      <h2 className={styles.subtitle}>
        We host events and full-day workshops.
      </h2>
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
        <span className="italic">info@writespeakcode.com</span> to learn how we
        can help you start a chapter near you.
      </p>
    </Section>

    <Sponsors sponsors={props.data.allSponsorsJson.nodes} />
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
    conferences: file(relativePath: { eq: "photos/WSC-NY-211.jpg" }) {
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

    allSponsorsJson(filter: { years: { in: "2019" } }) {
      nodes {
        company
        company_url
        logo
        level
      }
    }
  }
`
