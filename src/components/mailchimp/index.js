import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import styles from './mailchimp.module.css'

const url = ''

const CustomForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <form className={styles.form}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        ref={node => (email = node)}
        required
      />
      <button className={styles.button} onClick={submit}>
        Subscribe
      </button>
      {status === 'sending' && (
        <div className={styles.info}>Subscribing...</div>
      )}
      {status === 'error' && (
        <div
          className={styles.info}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className={styles.info}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  )
}

const Mailchimp = () => (
  <div className={styles.callout}>
    <h3 className={styles.heading}>Subscribe to conference updates:</h3>
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  </div>
)

export default Mailchimp
