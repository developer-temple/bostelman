import React, { Component, Fragment } from 'react'

//lib
import { colors } from '../../../lib/constants/css'

class ContactRow extends Component {
  render() {
    return (
      <Fragment>
        <div className='contact-row'>
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fas fa-phone icon"></i>
        </div>
        <style jsx>
          {`
            .contact-row {
              width: 90%;
              margin: 1rem auto;
              display: flex;
              justify-content: space-between;
            }

            .icon {
              color: ${colors.purple};
              font-size: 1.618rem;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default ContactRow