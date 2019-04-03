import React from 'react'

import Layout from '../layouts/default'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tech`, `diversity`, `conference`]} />
    <section>
      <h1>Write/Speak/Code</h1>
      <h2>
        We're on a mission to promote visibility and leadership of technologists
        with marginalized genders through peer-led professional development.
      </h2>
      <h3>
        Write/Speak/Code is a 501c3, tax-exempt non-profit that hosts an annual
        conference and meetup events designed to help you fully own your
        expertise through writing, speaking, and open source.
      </h3>
    </section>
    <section>
      <h3>Our Community</h3>
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
    </section>
    <section>
      <h3>Conferences</h3>
      <p>
        Let's take your career to the next level! Join us in San Francisco from
        August 16-18, 2019 for three days designed to fully own your expertise
        through writing, speaking, and open source.
      </p>
      <a href="https://goo.gl/forms/gPMUnIwnvYMuh3Tp1">Call for Proposals</a>
      <a href="https://writespeakcode-2019conference.eventbrite.com/">
        Get Tickets
      </a>
    </section>
    <section>
      <h3>Own Your Expertise</h3>
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
    <section>
      <h3>Chapters</h3>
      <p>
        Write/Speak/Code holds meetups and full-day workshops in cities across
        the country, including Chicago, Los Angeles, New York City, Seattle and
        the San Francisco Bay Area.
      </p>
    </section>
    <section>
      <h3>Sponsors</h3>
      <p>
        For great employers, sponsorship is the most effective way to recruit
        talented, driven technologists fill key technical positions and
        demonstrate your commitment to the professional development of people of
        marginalized genders at your organization. Write/Speak/Code is a 501c3
        nonprofit. Contact sponsor@writespeakcode.com to learn more.
      </p>
      <a href="https://drive.google.com/file/d/1X-nDSHYiPiPT79Rc1xUAZCNxvr67ei6J/view?usp=sharing">
        2019 Prospectus
      </a>
    </section>
  </Layout>
)

export default IndexPage
