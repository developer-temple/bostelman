import React, { Component, Fragment } from 'react'

//Components
import RotatedHeading from '../../../../shared/rotatedHeading'

//Lib
import { shopHeading } from '../../../../../lib/constants/content'
import { colors } from '../../../../../lib/constants/css'
class ServicesSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='services-section'>
          <RotatedHeading color={colors.green} text={shopHeading}/>
          
        </section>
        <style jsx>
          {`
            .services-section {
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

export default ServicesSection