import React from 'react'
import { Link, graphql } from 'gatsby'
import VisuallyHidden from '@reach/visually-hidden'

import Layout from '../layouts/default'
import SEO from '../components/seo'
import Section from '../components/section'

import styles from './index.module.css'

import atlassian from '../images/sponsors/atlassian.svg'
import netlify from '../images/sponsors/netlify.svg'
import glympse from '../images/sponsors/glympse.png'
import vts from '../images/sponsors/vts.png'
import seatgeek from '../images/sponsors/seatgeek.jpg'

const IndexPage = props => (
  <Layout>
    <SEO keywords={[`tech`, `diversity`, `conference`]} />
    <section className={styles.hero}>
      <VisuallyHidden>
        <h1>Write Speak Code</h1>
      </VisuallyHidden>
      <h2 className={styles.mission}>
        We're on a mission to promote the visibility and leadership of
        technologists with marginalized genders through peer-led professional
        development.
      </h2>
      <h3 className={styles.headline}>
        Write/Speak/Code is a 501c3, tax-exempt non-profit that hosts an annual
        conference and meetup events designed to help you fully own your
        expertise through writing, speaking, and open source.
      </h3>
    </section>

    <Section
      img={props.data.community.childImageSharp.fluid}
      imgAlt="2018 conference-goers pose for a photo together in front of the Write Speak Code banner"
      imgStyle={{ objectFit: 'cover', objectPosition: 'center center' }}
    >
      <h1 className={styles.title}>Our Community</h1>
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
      <Link to="code-of-conduct" className="link">
        Read the code of conduct
      </Link>
    </Section>

    <Section
      img={props.data.conferences.childImageSharp.fluid}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
      imgAlt="A panel of speakers on stage at the 2018 conference"
      id="conference"
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
      <p>
        The call for proposals is now open!{' '}
        <strong>Deadline: May 17, 2019</strong>
      </p>
      <div className="link-group">
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/forms/gPMUnIwnvYMuh3Tp1"
        >
          Call for Proposals
        </a>
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://writespeakcode-2019conference.eventbrite.com/"
        >
          Get Tickets
        </a>
      </div>
    </Section>

    <Section
      imgAlt="A conference attendee raises her hand while sitting at a round table of people taking notes and using laptops."
      img={props.data.oye.childImageSharp.fluid}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
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
          href="https://www.meetup.com/Write-Speak-Code-Atlanta"
        >
          Atlanta
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
        Don't see your city? Contact info@writespeakcode.com to learn how we can
        help you start a chapter near you.
      </p>
    </Section>

    <Section>
      <h1 className={styles.title}>Sponsorship</h1>
      <h2 className={styles.subtitle}>
        Recruit talented, driven technologists.
      </h2>
      <p>
        Sponsorship is the most effective way to demonstrate your commitment to
        the professional development of people with marginalized genders at your
        organization. Write/Speak/Code is a 501c3 nonprofit. Contact
        sponsor@writespeakcode.com to learn more.
      </p>
      <a
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1X-nDSHYiPiPT79Rc1xUAZCNxvr67ei6J/view?usp=sharing"
      >
        2019 Sponsorship Prospectus
      </a>
      <div className={styles.logos}>
        <h3 className={styles.heading}>Bronze</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.netlify.com"
        >
          <img src={netlify} alt="Netlify logo" className={styles.bigLogo} />
        </a>
        <h3 className={styles.heading}>Workshops</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.atlassian.com"
        >
          <img
            src={atlassian}
            alt="Atlassian logo"
            className={styles.mediumLogo}
          />
        </a>
        <h3 className={styles.heading}>Local Meetups</h3>
        <div className={styles.grid}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.glympse.com"
          >
            <img
              src={glympse}
              alt="Glympse logo"
              className={styles.smallLogo}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.vts.com"
          >
            <img src={vts} alt="VTS logo" className={styles.smallLogo} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.seatgeek.com"
          >
            <img
              src={seatgeek}
              alt="SeatGeek logo"
              className={styles.smallLogo}
            />
          </a>
        </div>
      </div>
    </Section>
  </Layout>
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
    conferences: file(relativePath: { eq: "photos/conferences.jpg" }) {
      ...fluidImage
    }
    oye: file(relativePath: { eq: "photos/oye.jpg" }) {
      ...fluidImage
    }
    chapters: file(relativePath: { eq: "photos/chapters.jpg" }) {
      ...fluidImage
    }
    community: file(relativePath: { eq: "photos/community.jpg" }) {
      ...fluidImage
    }
  }
`
