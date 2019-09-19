import React, { Component, Fragment } from 'react'

//Components
import RotatedHeading from '../../../../shared/rotatedHeading'
import ContactForm from '../../../../shared/contactForm'
import ContactRow from '../../../../shared/contactRow'

//Lib
import { contactHeading } from '../../../../../lib/constants/content'
import { colors } from '../../../../../lib/constants/css'

class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='contact-section'>
          <RotatedHeading color={colors.purple} text={contactHeading}/>
          <ContactForm/>
          <ContactRow/>
        </section>
        <style jsx>
          {`
            .contact-section {
              width: 100vw;
              height: 100vh;
              padding: 3rem 0;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default ContactSection