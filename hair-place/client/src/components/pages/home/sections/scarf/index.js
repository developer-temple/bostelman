import React, { Component, Fragment } from 'react'

import { images } from '../../../../../assets'
import { scarfHeading } from '../../../../../lib/constants/content'
import { colors, fonts } from '../../../../../lib/constants/css'

class ScarfSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='scarf-section'>
          <div className='scarf-content'>
            <h2>{scarfHeading}</h2>
          </div>
        </section>
        <style jsx>
          {`
            .scarf-section {
              width: 100vw;
              height: 100vh;
              background: url('${images.scarfImg}');
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
            }

            .scarf-section::after {
              content: '';
              position: absolute;
              background: ${colors.white80};
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
            }

            .scarf-content {
              color: ${colors.red};
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

export default ScarfSection