import React from 'react'

import ConferenceLayout from '../../layouts/conference'
import SEO from '../../components/seo'

import Section from '../../components/section'

const IndexPage = () => (
  <ConferenceLayout>
    <SEO
      title="2019 Conference"
      keywords={[`tech`, `diversity`, `conference`]}
    />
    <Section id="about">
      <h1>About</h1>
    </Section>
    <Section id="location">
      <h1>Location</h1>
    </Section>
    <Section id="sponsors">
      <h1>Sponsors</h1>
    </Section>
  </ConferenceLayout>
)

export default IndexPage
