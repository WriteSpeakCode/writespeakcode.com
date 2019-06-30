import React from 'react'
import SEO from '../../components/seo'
import ConfLayout from '../../layouts/conference'

import styles from './volunteer.module.css'

const VolunteerPage = () => (
  <ConfLayout subpage={true}>
    <SEO title="Volunteer | 2019 Conference" />

    <section className={styles.container}>
      <h1 className="title">Volunteer</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfAwc5J_hBm0jg7c9ZRMS4X_fw9krJBAwEDEZPzhGjUZwmt4Q/viewform?embedded=true"
        width="100%"
        height="2000"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="2019 Volunteer Interest Form"
      >
        Loading...
      </iframe>
    </section>
  </ConfLayout>
)

export default VolunteerPage
