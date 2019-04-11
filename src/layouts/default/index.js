import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Notification from '../../components/notification'

import '../base.css'
import styles from './default.module.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SkipNavLink />
        <div className={styles.gradientBg}>
          <Notification />
          <div className={styles.whiteBg}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <SkipNavContent>
              <main className={styles.container}>{children}</main>
            </SkipNavContent>
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
