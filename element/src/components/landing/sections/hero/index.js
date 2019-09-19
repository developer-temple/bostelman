import React, { Component, Fragment } from 'react'

import { IMAGES } from '../../../../assets'

class HeroSection extends Component {
  render() {
    const { man2 } = IMAGES
    return (
      <Fragment>
        <section className='hero-section'>
          <div className='inner'>
          
          </div>
        </section>
        <style jsx>
          {`
            .hero-section {
              height: 100vh;
              background: url("${man2.src}");
              background-size: cover;
              background-repeat: no-repeat;
            }

            .inner {
              height: 100%;
              background: rgba(255, 255, 255, .9);
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default HeroSection
