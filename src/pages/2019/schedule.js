import React from 'react'
// import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs'

// import './schedule-tabs.css'
import styles from './schedule.module.css'

const Schedule = () => {
  return (
    <ConfLayout subpage={true}>
      <SEO title="Schedule | 2019 Conference" />
      <section className={styles.schedule}>
        <h1 className="title">Schedule</h1>
        <Tabs>
          <TabList className={styles.tablist}>
            <Tab className={styles.tab}>
              <h4>Friday 8/16</h4>
              <h5>Write / Visibility Day</h5>
            </Tab>
            <Tab className={styles.tab}>
              <h4>Saturday 8/17</h4>
              <h5>Speak / Leadership Day</h5>
            </Tab>
            <Tab className={styles.tab}>
              <h4>Sunday 8/19</h4>
              <h5>Code / Project Day</h5>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </section>
    </ConfLayout>
  )
}

export default Schedule
//
// export const scheduleQuery = graphql`
//   query {
//     allSpeakersJson(
//       filter: { years: { in: "2019" } }
//       sort: { fields: name, order: ASC }
//     ) {
//       nodes {
//         id
//         name
//         role
//         headshot
//         company
//         bio
//         pronouns
//         links {
//           type
//           url
//         }
//       }
//     }
//   }
// `
