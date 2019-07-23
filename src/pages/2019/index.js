import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

import ConfLayout from '../../layouts/conference'
import Sponsors from '../../components/sponsors'
import Hotels from '../../components/hotels'

import 'pure-react-carousel/dist/react-carousel.es.css'
import styles from './index.module.css'

const Conference2019 = ({ data }) => {
  return (
    <ConfLayout>
      <section
        className={styles.about}
        style={{ backgroundColor: 'white', color: '#181c3c' }}
        id="about"
      >
        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className="title">About</h3>
            <h4 className="subtitle">
              What to expect at the Write/Speak/Code conference
            </h4>
            <p>
              Write/Speak/Code is an intensive, 3-day, hands-on conference with
              workshops, personalized feedback sessions, panels, and talks by
              talented technologists with marginalized genders.
            </p>
            <p>
              This year we’ll have four distinct conference tracks &mdash;
              Write, Speak, Code, and Growth. Each day of the conference, you’ll
              have the choice of participating in our core curriculum for
              writing (Friday), speaking (Saturday) or open-source/coding
              (Sunday) OR attending talks across three other tracks. The choice
              is yours!
            </p>
            <p>
              Write/Speak/Code’s core curriculum is designed to help you break
              down mental blockers, identify and own your expertise, and build a
              toolkit and body of work around technical blog writing, conference
              speaking, and open source coding. On each day, attendees leave the
              conference having developed blog posts and conference talks,
              making open source contributions, and more. We provide actionable
              next steps and a supportive community to keep attendees
              accountable to the goals they set at the conference and beyond.
            </p>
          </div>
          <aside className={styles.aside}>
            <h4 className="subtitle">Which tracks should I choose?</h4>
            <p>
              If you’ve never been to a W/S/C event or conference before, we
              recommend doing our core curriculum each day or picking one or two
              days to work through the curriculum for the topics you’re most
              excited to learn, expand, and grow in.{' '}
            </p>
            <p>
              For past attendees, the core curriculum is also a great refresher
              to reboot your writing, speaking, and open source contributing
              harddrive!
            </p>
          </aside>
        </div>
      </section>

      <div className={styles.notification}>
        <FontAwesomeIcon
          icon={faBullhorn}
          aria-hidden
          className={styles.icon}
        />
        We're looking for help during the conference in exchange for a free
        ticket:{' '}
        <a
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfAwc5J_hBm0jg7c9ZRMS4X_fw9krJBAwEDEZPzhGjUZwmt4Q/viewform?usp=sf_link"
        >
          Become a volunteer
        </a>
      </div>

      <section
        className={styles.schedule}
        style={{ backgroundColor: '#181c3c', color: 'white' }}
        id="tracks-and-schedule"
      >
        <div className={styles.row}>
          <Img
            alt="Illustration of a laptop by Maia Boakye"
            fluid={data.laptop.childImageSharp.fluid}
            className={styles.image}
          />
          <div className={styles.content}>
            <h3 className="title">Tracks & Schedule</h3>
            <div className={styles.tracks}>
              <div>
                <h4 className="subtitle">Friday</h4>
                <h5>Write / Visibility Day</h5>
                <ul>
                  <li>Track 1: Core Write curriculum</li>
                  <li>Track 2: Speak</li>
                  <li>Track 3: Code</li>
                  <li>Track 4: Growth</li>
                </ul>
              </div>
              <div>
                <h4 className="subtitle">Saturday</h4>
                <h5>Speak / Leadership Day</h5>
                <ul>
                  <li>Track 1: Core Speak curriculum</li>
                  <li>Track 2: Write</li>
                  <li>Track 3: Code</li>
                  <li>Track 4: Growth</li>
                </ul>
              </div>
              <div>
                <h4 className="subtitle">Sunday</h4>
                <h5>Code / Project Day</h5>
                <ul>
                  <li>Track 1: Core Code curriculum</li>
                  <li>Track 2: Write</li>
                  <li>Track 3: Speak</li>
                  <li>Track 4: Growth</li>
                </ul>
              </div>
            </div>
            <Link
              to="/2019/speakers/"
              className="link"
              style={{ borderColor: 'var(--tan)', marginRight: '1em' }}
            >
              View speakers
            </Link>
            <Link
              to="/2019/program/"
              className="link"
              style={{ borderColor: 'var(--orange)', marginRight: '1em' }}
            >
              View talks & workshops
            </Link>
            <em>Full schedule coming soon</em>
          </div>
        </div>
      </section>

      <section
        className={styles.location}
        style={{ backgroundColor: '#ea5038', color: 'white' }}
        id="location"
      >
        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className="title">Location & Lodging</h3>
            <h4 className="subtitle">
              Palace of Fine Arts
              <br />
              3601 Lyon St, San Francisco, CA 94123
            </h4>
            <Hotels />
            <p>
              We recommend taking a taxi or Lyft/Uber to the conference. It’s a
              beautiful, historic San Francisco building and landmark, but it’s
              unfortunately not on the BART line.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.488895918175!2d-122.4505230490306!3d37.8020160796551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586d510144681%3A0xe960db8a581aacf5!2sPalace+of+Fine+Arts!5e0!3m2!1sen!2sus!4v1556593751369!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Palace of Fine Arts San Francisco Google Maps"
          />
        </div>
      </section>

      <section
        className={styles.coc}
        style={{ backgroundColor: 'white', color: '#181c3c' }}
      >
        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className="title">Code of Conduct</h3>
            <h4 className="subtitle">The Quick Version</h4>
            <p>
              Our event and its associated online spaces are dedicated to
              providing a harassment-free experience for everyone, regardless of
              gender and gender identity, age, sexual orientation, disability,
              physical appearance, body size, race, or religion (or lack
              thereof). We do not tolerate harassment of participants in any
              form. Sexual language and imagery is not appropriate at any point
              during the event. Participants violating these rules may be
              sanctioned or expelled at the discretion of the organizers.
            </p>
            <Link to={`/code-of-conduct/`} className="link">
              Read the full version
            </Link>
          </div>
        </div>
      </section>

      <section
        className={styles.testimonials}
        style={{ backgroundColor: '#f5d2c6', color: '#181c3c' }}
      >
        <div className={styles.row}>
          <div className={styles.content}>
            <h3 className="title">Testimonials</h3>
            <CarouselProvider
              naturalSlideWidth={400}
              naturalSlideHeight={400}
              totalSlides={10}
              isPlaying={true}
              interval={5000}
            >
              <DotGroup className={styles.dotGroup} />
              <Slider>
                <Slide index={0}>
                  <TwitterTweetEmbed
                    tweetId={'1026238769878450177'}
                    options={{ cards: 'hidden' }}
                  />
                </Slide>
                <Slide index={1}>
                  <TwitterTweetEmbed tweetId={'901710289690796032'} />
                </Slide>
                <Slide index={2}>
                  <TwitterTweetEmbed tweetId={'802645541985210368'} />
                </Slide>
                <Slide index={3}>
                  <TwitterTweetEmbed tweetId={'901586188154183681'} />
                </Slide>
                <Slide index={4}>
                  <TwitterTweetEmbed tweetId={'743287577503989760'} />
                </Slide>
                <Slide index={5}>
                  <TwitterTweetEmbed tweetId={'743205226434400256'} />
                </Slide>
                <Slide index={6}>
                  <TwitterTweetEmbed tweetId={'744272710155517952'} />
                </Slide>
                <Slide index={7}>
                  <TwitterTweetEmbed tweetId={'817353447423045632'} />
                </Slide>
                <Slide index={8}>
                  <TwitterTweetEmbed
                    tweetId={'744267099380547584'}
                    options={{ cards: 'hidden' }}
                  />
                </Slide>
                <Slide index={9}>
                  <TwitterTweetEmbed tweetId={'744246096851939329'} />
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <Img
            alt="Illustration of people by Maia Boakye"
            fluid={data.people.childImageSharp.fluid}
            className={styles.image}
          />
        </div>
      </section>

      <Sponsors isConference={true} />
    </ConfLayout>
  )
}

export default Conference2019

export const pageQuery = graphql`
  query {
    people: file(relativePath: { eq: "illustrations/2019-people.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    laptop: file(relativePath: { eq: "illustrations/2019-laptop.png" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
