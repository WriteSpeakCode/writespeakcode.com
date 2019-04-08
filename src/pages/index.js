import React from 'react'
import VisuallyHidden from '@reach/visually-hidden'

import Layout from '../layouts/default'
import SEO from '../components/seo'

import styles from './index.module.css'

const IndexPage = () => (
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

    <section className={styles.section}>
      <h1 className={styles.title}>Community</h1>
      <p>
        Our community is open to and our content is designed for people whose
        gender or gender history is marginalized within tech. We define those
        gender groups as:{' '}
      </p>
      <ul className={styles.list}>
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
    </section>
    <section className={styles.section}>
      <h1 className={styles.title}>Conferences</h1>
      <p>
        Join us in San Francisco from August 16-18, 2019 for three days designed
        to fully own your expertise through writing, speaking, and open source.
      </p>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/forms/gPMUnIwnvYMuh1Tp1"
      >
        Call for Proposals
      </a>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href="https://writespeakcode-2019conference.eventbrite.com/"
      >
        Get Tickets
      </a>
    </section>
    <section className={styles.section}>
      <h1 className={styles.title}>Own Your Expertise</h1>
      <p>
        Learn to understand your expertise, own your expertise, and present
        yourself and your accomplishments with confidence with other fellow
        technologists. We will convert our expertise into thought leadership,
        conference speaking, and open source contributing.
      </p>
      <p>
        We provide breakfast and lunch for all dietary needs and ensure the
        location is wheelchair accessible. We also provide nursing rooms,
        childcare services, CART/ASL services, and any other accessibility
        needs, as requested. Our upcoming events are:
      </p>
    </section>
    <section className={styles.section}>
      <h1 className={styles.title}>Chapters</h1>
      <p>
        Write/Speak/Code holds meetups and full-day workshops in cities across
        the country, including Chicago, Los Angeles, New York City, Seattle and
        the San Francisco Bay Area.
      </p>
    </section>
    <section className={styles.section}>
      <h1 className={styles.title}>Sponsors</h1>
      <p>
        Sponsorship is the most effective way to recruit talented, driven
        technologists and demonstrate your commitment to the professional
        development of people with marginalized genders at your organization.
        Write/Speak/Code is a 501c3 nonprofit. Contact
        sponsor@writespeakcode.com to learn more.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1X-nDSHYiPiPT79Rc1xUAZCNxvr67ei6J/view?usp=sharing"
      >
        2019 Prospectus
      </a>
    </section>
  </Layout>
)

export default IndexPage
