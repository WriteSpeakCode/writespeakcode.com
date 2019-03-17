import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tech`, `diversity`, `conference`]} />
    <h2>
      Write/Speak/Code is on a mission to promote visibility and leadership of
      technologists with marginalized genders through peer-led professional
      development.
    </h2>
    <h3>
      Write/Speak/Code is a 501c3, tax-exempt non-profit that hosts an annual
      conference and meetup events designed to help you fully own your expertise
      through writing, speaking, and open source.
    </h3>
  </Layout>
)

export default IndexPage
