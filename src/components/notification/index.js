import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

// import styles from './notification.module.css'

const Notification = message => (
  <StaticQuery
    query={graphql`
      query {
        allSiteJson {
          edges {
            node {
              notification {
                copy
                cta
                link
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allSiteJson.edges[0].node.notification.copy}
        <Link to={data.allSiteJson.edges[0].node.notification.link}>
          {data.allSiteJson.edges[0].node.notification.cta}
        </Link>
      </div>
    )}
  />
)

export default Notification
