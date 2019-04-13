import React from 'react'

import Layout from '../layouts/default'
import SEO from '../components/seo'

const CodeOfConductPage = () => (
  <Layout>
    <SEO keywords={[`tech`, `diversity`, `code of conduct`]} />
    <section>
      <h1>Code of Conduct</h1>
      <div>
        <div>
          <h2>The Quick Version</h2>
          <p>
            Our events and online spaces are dedicated to providing a
            harassment-free experience for everyone, regardless of gender and
            gender identity, age, sexual orientation, disability, physical
            appearance, body size, race, or religion (or lack thereof). We do
            not tolerate harassment of participants in any form. Sexual language
            and imagery is never appropriate. Participants violating these rules
            may be sanctioned or expelled at the discretion of the organizers.
          </p>
          <p>
            No weapons of any kind, or drugs are allowed at Write/Speak/Code.
          </p>
        </div>
        <div>
          <h2>The Less Quick Version</h2>
          <p>
            Write/Speak/Code is dedicated to providing a harassment-free
            experience for everyone. We do not tolerate harassment of
            participants in any form. This code of conduct applies to all
            Write/Speak/Code spaces both online and off. Anyone who violates
            this code of conduct may be sanctioned or expelled from these spaces
            at the discretion of the Write/Speak/Code.
          </p>
          <p>
            Some Write/Speak/Code spaces may have additional rules in place,
            which will be made clearly available to participants. Participants
            are responsible for knowing and abiding by these rules.
          </p>
          <h3>Harassment includes:</h3>
          <ul>
            <li>
              Offensive comments related to gender, gender identity and
              expression, sexual orientation, disability, mental illness,
              neuro(a)typicality, physical appearance, body size, age, race, or
              religion.
            </li>
            <li>
              Unwelcome comments regarding a person's lifestyle choices and
              practices, including those related to food, health, parenting,
              drugs, and employment.
            </li>
            <li>Deliberate misgendering or use of 'dead' or rejected names.</li>
            <li>
              Gratuitous or off-topic sexual images or behaviour in spaces where
              they're not appropriate.
            </li>
            <li>
              Physical contact and simulated physical contact (eg, textual
              descriptions like "hug" or "backrub") without consent or after a
              request to stop.
            </li>
            <li>Threats of violence.</li>
            <li>
              Incitement of violence towards any individual, including
              encouraging a person to commit suicide or to engage in self-harm.
            </li>
            <li>Deliberate intimidation.</li>
            <li>Stalking or following.</li>
            <li>
              Harassing photography or recording, including logging online
              activity for harassment purposes.
            </li>
            <li>Sustained disruption of discussion.</li>
            <li>Unwelcome sexual attention.</li>
            <li>
              Pattern of inappropriate social contact, such as
              requesting/assuming inappropriate levels of intimacy with others.
            </li>
            <li>Continued one-on-one communication after requests to cease.</li>
            <li>
              Deliberate "outing" of any aspect of a person's identity without
              their consent except as necessary to protect vulnerable people
              from intentional abuse.
            </li>
            <li>Publication of non-harassing private communication.</li>
          </ul>
          <h3>
            Write/Speak/Code prioritizes marginalized people's safety over
            privileged people's comfort and therefore we will not act on
            complaints regarding:
          </h3>
          <ul>
            <li>
              'Reverse' -isms, including 'reverse racism,' 'reverse sexism,' and
              'cisphobia'.
            </li>
            <li>
              Reasonable communication of boundaries, such as "leave me alone,"
              "go away," or "I'm not discussing this with you".
            </li>
            <li>Communicating in a 'tone' you don't find congenial.</li>
            <li>
              Criticizing racist, sexist, cissexist, or otherwise oppressive
              behavior or assumptions.
            </li>
          </ul>
        </div>
      </div>
      <aside>
        <h2>Need Help?</h2>
        <p>
          Organizers can be contacted by email at:{' '}
          <a href="mailto:info@writespeakcode.com">info@writespeakcode.com</a>
        </p>
        <p>
          Contact information for specific organizers will be provided to all
          registrants of the conference. If the matter is especially urgent,
          please call the organizers provided.
        </p>
      </aside>
    </section>
  </Layout>
)

export default CodeOfConductPage
