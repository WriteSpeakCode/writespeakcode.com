import React from "react"
import PropTypes from "prop-types"

import "../base.css"
import styles from "./conference.module.css"

const Layout = ({ children }) => <main>{children}</main>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
