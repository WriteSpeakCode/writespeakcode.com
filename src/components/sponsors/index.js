import React from 'react'

import Sponsor from '../sponsor'

import styles from './sponsors.module.css'

import mailchimp from '../../../content/sponsors/mailchimp.json'
import zipline from '../../../content/sponsors/zipline.json'
import splunk from '../../../content/sponsors/splunk.json'
import sentry from '../../../content/sponsors/sentry.json'
import textio from '../../../content/sponsors/textio.json'
import netlify from '../../../content/sponsors/netlify.json'
import atlassian from '../../../content/sponsors/atlassian.json'
import seatgeek from '../../../content/sponsors/seatgeek.json'
import vts from '../../../content/sponsors/vts.json'
import glympse from '../../../content/sponsors/glympse.json'
import github from '../../../content/sponsors/github.json'
import adhoc from '../../../content/sponsors/adhoc.json'
import climatecorp from '../../../content/sponsors/climate-corporation.json'
import onramp from '../../../content/sponsors/onramp.json'
import microsoft from '../../../content/sponsors/microsoft.json'
import attune from '../../../content/sponsors/attune-insurance.json'
import carbonfive from '../../../content/sponsors/carbon-five.json'
import clever from '../../../content/sponsors/clever.json'
import cnndigital from '../../../content/sponsors/cnn-digital.json'
import googlewomentechmakers from '../../../content/sponsors/google-women-techmakers.json'
import google from '../../../content/sponsors/google.json'
import heroku from '../../../content/sponsors/heroku.json'
import indeed from '../../../content/sponsors/indeed.json'
import kaporcenter from '../../../content/sponsors/kapor-center.json'
import lob from '../../../content/sponsors/lob.json'
import newsela from '../../../content/sponsors/newsela.json'
import nowsta from '../../../content/sponsors/nowsta.json'
import oreilly from '../../../content/sponsors/oreilly-media.json'
import pivotal from '../../../content/sponsors/pivotal.json'

// Community Partners
import girlgeekx from '../../../content/sponsors/girlgeekx.json'
import codenewbie from '../../../content/sponsors/codenewbie.json'
import pyladies from '../../../content/sponsors/pyladies.json'
import techladies from '../../../content/sponsors/techladies.json'
import diversifytech from '../../../content/sponsors/diversifytech.json'
import mothercoders from '../../../content/sponsors/mothercoders.json'
import techbychoice from '../../../content/sponsors/techbychoice.json'
import brooklynjs from '../../../content/sponsors/brooklynjs.json'

const Sponsors = ({ sponsors, isConference }) => {
  return (
    <section id="sponsorship">
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.info}>
            <h1 className="title">Sponsorship</h1>
            <h2 className="subtitle">
              Recruit talented, driven technologists.
            </h2>
            <p>
              Sponsorship is the most effective way to demonstrate your
              commitment to the professional development of people with
              marginalized genders at your organization.
            </p>
          </div>
          <div className={styles.cta}>
            <p>
              Write/Speak/Code is a 501c3 nonprofit. Contact{' '}
              <span className="italic">sponsor@writespeakcode.com</span> to
              learn more.
            </p>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1X-nDSHYiPiPT79Rc1xUAZCNxvr67ei6J/view?usp=sharing"
            >
              2019 Sponsorship Prospectus
            </a>
          </div>
        </div>
      </div>

      <div className={styles.wrap}>
        <section
          className={[styles['platinum'], styles.levelSection].join(' ')}
        >
          <h3 className={styles.heading}>Platinum</h3>
          <div className={styles.grid}>
            <Sponsor company={github} level="Platinum" />
          </div>
        </section>
        <section className={[styles['gold'], styles.levelSection].join(' ')}>
          <h3 className={styles.heading}>Gold</h3>
          <div className={styles.grid}>
            <Sponsor company={mailchimp} />
            <Sponsor company={splunk} />
            <Sponsor company={zipline} />
            <Sponsor company={onramp} />
            <Sponsor company={google} />
          </div>
        </section>
        <section className={[styles['silver'], styles.levelSection].join(' ')}>
          <h3 className={styles.heading}>Silver</h3>
          <div className={styles.grid}>
            <Sponsor company={sentry} />
            <Sponsor company={newsela} />
            <Sponsor company={oreilly} />
            <div />
          </div>
        </section>
        <section className={[styles['bronze'], styles.levelSection].join(' ')}>
          <h3 className={styles.heading}>Bronze</h3>
          <div className={styles.grid}>
            <Sponsor company={netlify} />
            <Sponsor company={textio} />
            <Sponsor company={adhoc} />
            <Sponsor company={carbonfive} />
            <Sponsor company={cnndigital} />
            <Sponsor company={heroku} />
            <Sponsor company={kaporcenter} />
            <Sponsor company={pivotal} />
          </div>
        </section>
        {!isConference && (
          <section className={[styles['other'], styles.levelSection].join(' ')}>
            <h3 className={styles.heading}>Other</h3>
            <div className={styles.grid}>
              <Sponsor company={atlassian} level="Private Workshops" />
              <Sponsor company={sentry} level="Local Meetup - SF" />
              <Sponsor company={seatgeek} level="Local Meetup - NYC" />
              <Sponsor company={vts} level="Local Meetup - NYC" />
              <Sponsor company={glympse} level="Local Meetup - SEA" />{' '}
              <Sponsor company={climatecorp} level="Local Meetup - SEA + SF" />
              <Sponsor company={microsoft} level="Conference Topic Dinner" />
              <Sponsor company={clever} level="Local Meetup - SF" />
              <Sponsor company={indeed} level="Own Your Expertise" />
              <Sponsor company={lob} level="Local Meetup - SF" />
              <Sponsor
                company={googlewomentechmakers}
                level="Conference Childcare & Lanyard"
              />
              <Sponsor company={nowsta} level="Local Meetup - NYC" />
              <Sponsor company={attune} level="Conference Topic Dinner" />
            </div>
          </section>
        )}
        {isConference && (
          <section className={[styles['other'], styles.levelSection].join(' ')}>
            <h3 className={styles.heading}>Other</h3>
            <div className={styles.grid}>
              <Sponsor company={microsoft} level="Conference Topic Dinner" />
              <Sponsor
                company={googlewomentechmakers}
                level="Conference Childcare & Lanyard"
              />
              <Sponsor company={attune} level="Conference Topic Dinner" />
            </div>
          </section>
        )}

        <section
          className={[styles['community'], styles.levelSection].join(' ')}
        >
          <h3 className={styles.heading}>Community Partners</h3>
          <div className={styles.grid}>
            <Sponsor company={girlgeekx} />
            <Sponsor company={codenewbie} />
            <Sponsor company={pyladies} />
            <Sponsor company={techladies} />
            <Sponsor company={techbychoice} />
            <Sponsor company={mothercoders} />
            <Sponsor company={diversifytech} />
            <Sponsor company={brooklynjs} />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Sponsors
