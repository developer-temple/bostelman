import React, { Component, Fragment } from 'react'

//Lib
import { colors, fonts } from '../../../../../lib/constants/css'
import { brunetteHeading } from '../../../../../lib/constants/content'

//Assets
import { images } from '../../../../../assets'

class BrunetteSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='brunette-section'>
          <div className='brunette-content'>
            <h2>{brunetteHeading}</h2>
          </div>
        </section>
        <style jsx>
          {`
            .brunette-section {
              width: 100vw;
              height: 100vh;
              background: url('${images.brunetteImg}');
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
            }

            .brunette-section::after {
              content: '';
              position: absolute;
              background: ${colors.white80};
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
            }

            .brunette-content {
              color: ${colors.blue};
              position: absolute;
              top: 20%;
              right: 5vw;
              left: 5vw;
              z-index: 2;
              font-family: ${fonts.serif};
              font-size: 1.618rem;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default BrunetteSection