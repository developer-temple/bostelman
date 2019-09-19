import React, { Component, Fragment } from 'react'

//Lib
import { colors, fonts } from '../../../../../lib/constants/css'
import { heroTitle, heroAsideText } from '../../../../../lib/constants/content'

//Assets
import { images } from '../../../../../assets'

class HeroSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='hero-section'>
          <div className='hero-content'>
            <h1>{heroTitle}</h1>
          </div>
          <aside className='hero-aside'>
            <p>{heroAsideText}</p>
          </aside>
          <div className='scroll-indicator'>
          <i className="fas fa-chevron-down"></i>
          </div>
        </section>
        <style jsx>
          {`
            .hero-section {
              width: 100vw;
              height: 100vh;
              background: url('${images.heroBg}');
              background-repeat: no-repeat;
              position: relative;
            }

            .hero-section::after {
              content: '';
              position: absolute;
              background: ${colors.white80};
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
            }

            .hero-content {
              color: ${colors.purple};
              position: absolute;
              top: 50%;
              right: 5vw;
              left: 5vw;
              transform: translateY(-50%);
              z-index: 2;
              font-family: ${fonts.serif};
              font-size: 1.618rem;
            }

            .hero-aside {
              color: ${colors.purple};
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateX(50px) rotate(90deg);
              z-index: 2;
              font-family: ${fonts.serif};
              font-size: 1rem;
            }

            .scroll-indicator {
              position: absolute;
              left: 50%;
              bottom: 0;
              transform: translateX(-50%);
              z-index: 2;
              color: ${colors.purple};
              font-size: 3rem;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default HeroSection