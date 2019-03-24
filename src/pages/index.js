import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tech`, `diversity`, `conference`]} />
    <h2 className="heading">
      We're on a mission to promote visibility and leadership of technologists
      with marginalized genders through peer-led professional development.
    </h2>
    <p>
      Write/Speak/Code is a 501c3, tax-exempt non-profit that hosts an annual
      conference and meetup events designed to help you fully own your expertise
      through writing, speaking, and open source.
    </p>
    <div className="heading">Heading 1</div>
    <div className="subtitle">Secondary information to the heading.</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div className="heading--secondary">Heading 2</div>
    <div className="subtitle--secondary">
      Secondary information to the heading. Sometimes there is a lot of
      information about the heading and this becomes longer.
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Layout>
)

export default IndexPage
