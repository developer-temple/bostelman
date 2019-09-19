import React, { Component, Fragment } from 'react'

//Lib
import { colors, fonts } from '../../../../../lib/constants/css'
import { blondeHeading } from '../../../../../lib/constants/content'

//Assets
import { images } from '../../../../../assets'

class BlondeSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='blonde-section'>
          <div className='blonde-content'>
            <h2>{blondeHeading}</h2>
          </div>
        </section>
        <style jsx>
          {`
            .blonde-section {
              width: 100vw;
              height: 100vh;
              background: url('${images.blondeImg}');
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
            }

            .blonde-section::after {
              content: '';
              position: absolute;
              background: ${colors.white80};
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
            }

            .blonde-content {
              color: ${colors.green};
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

export default BlondeSection