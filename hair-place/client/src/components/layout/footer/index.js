import React, { Component, Fragment } from 'react'

//Lib
import { colors } from '../../../lib/constants/css'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className='footer'>
          <small className='copyright'>&copy;{new Date().getFullYear()} Unique Boutique &amp; Spalon</small>
          <small className='copyright'>Made By Temple Design Solutions</small>
        </footer>
        <style jsx>
          {`
            .footer {
              background-color: ${colors.gray};
              color: ${colors.white};
            }

            .copyright {
              padding: .5rem 0;
              display: block;
              text-align: center;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Footer