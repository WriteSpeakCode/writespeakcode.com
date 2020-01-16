import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import HomeLayout from '../layouts/home'
import SEO from '../components/seo'
import Sponsors from '../components/sponsors'
import styles from './index.module.css'
import { ExternalLink } from '../components/link'

const IndexPage = ({ data }) => (
  <HomeLayout>
    <SEO keywords={[`tech`, `diversity`, `conference`]} />

    <section
      id="community"
      className={[styles.photoSection, styles.community].join(' ')}
    >
      <div className={styles.row}>
        <Img
          alt="2018 conference-goers pose for a photo together in front of the Write Speak Code banner"
          fluid={data.community.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className="title">Community</h1>
          <h2 className="subtitle">
            Our community is open to and our content is designed for people
            whose gender or gender history is marginalized within tech.
          </h2>
          <p>We define those gender groups as:</p>
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
            internal and external effects of that marginalization by
            identifying, expanding, and sharing their expertise with the support
            of an engaged peer network.
          </p>
          <Link to="/code-of-conduct/" className="link">
            Read the code of conduct
          </Link>
        </div>
      </div>
    </section>

    <section
      id="conference"
      className={[styles.photoSection, styles.conference].join(' ')}
    >
      <div className={styles.row}>
        <Img
          alt="A panel of speakers on stage at the 2018 conference"
          fluid={data.conf.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className="title">Annual Conference</h1>
          <h2 className="subtitle">
            Designed to help you fully own your expertise through writing,
            speaking, and open source.
          </h2>
          <p>Past years:</p>
          <div className={styles.citygrid}>
            <Link to="/2019/" className="link">
              SF 2019
            </Link>
            <ExternalLink
              href="https://writespeakcode.github.io/2018"
              text="NYC 2018"
            />
            <ExternalLink
              href="https://2017.writespeakcode.com"
              text="PDX 2017"
            />
            <span>CHI 2016</span>
            <ExternalLink
              href="http://2015.writespeakcode.com/"
              text="NYC 2015"
            />
            <span>NYC 2013</span>
          </div>
        </div>
      </div>
    </section>

    <section
      id="own-your-expertise"
      className={[styles.photoSection, styles.oye].join(' ')}
    >
      <div className={styles.row}>
        <Img
          alt="A smiling speaker talks on stage at the 2018 conference with a microphone."
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
          <ExternalLink
            href="https://www.meetup.com/pro/writespeakcode/"
            text="Find local events"
            icon="meetup"
          />
        </div>
      </div>
    </section>

    <section
      id="chapters"
      className={[styles.photoSection, styles.chapters].join(' ')}
    >
      <div className={styles.row}>
        <Img
          alt="A woman sitting at a table in the audience raises her hand to ask a question."
          fluid={data.chapters.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain', objectPosition: 'center center' }}
          className={styles.image}
        />
        <div className={styles.content}>
          <h1 className="title">Local Chapters</h1>
          <h2 className="subtitle">
            We have communities in cities across the U.S.
          </h2>
          <div className={styles.citygrid}>
            <ExternalLink
              href="https://www.meetup.com/Write-Speak-Code-Austin/"
              text="Austin"
              icon="meetup"
            />
            <ExternalLink
              href="https://www.meetup.com/WriteSpeakCode-Chicago"
              text="Chicago"
              icon="meetup"
            />
            <ExternalLink
              href="https://www.meetup.com/Write-Speak-Code-Los-Angeles"
              text="Los Angeles"
              icon="meetup"
            />
            <ExternalLink
              href="https://www.meetup.com/Write-Speak-Code-NYC/"
              text="New York City"
              icon="meetup"
            />
            <ExternalLink
              href="https://www.meetup.com/WriteSpeakCode-SFBay/"
              text="San Francisco"
              icon="meetup"
            />
            <ExternalLink
              href="https://www.meetup.com/WSC-Seattle"
              text="Seattle"
              icon="meetup"
            />
          </div>
          <p>
            Don't see your city? Contact{' '}
            <span className="italic">info@writespeakcode.com</span> to learn how
            we can help you start a chapter.
          </p>
        </div>
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
    conf: file(relativePath: { eq: "photos/WSC2019-88.jpg" }) {
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
