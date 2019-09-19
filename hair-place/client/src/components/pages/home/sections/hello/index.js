import React, { Component, Fragment } from 'react'

//Lib
import { colors, fonts } from '../../../../../lib/constants/css'
import { helloText, hello } from '../../../../../lib/constants/content'

//Assets
import { images } from '../../../../../assets'
class HelloSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='hello-section'>
          <h2 className='heading'>{hello}</h2>
          <p className='text'>{helloText}</p>
          <img className='lookup' src={images.lookupImg}/>
        </section>
        <style jsx>
          {`
            .hello-section {
              width: 100vw;
              height: 100vh;
              background-color: ${colors.red};
              padding: 1rem;
              position: relative;
            }

            .heading {
              font-size: 2rem;
              margin: 3rem 0;
              font-family: ${fonts.serif};
              color: ${colors.white}; 
            }

            .text {
              font-family: ${fonts.sansSerif};
              color: ${colors.white};
              font-size: 1.3rem;
            }

            .lookup {
              position: absolute;
              left: 0;
              right: 0;
              botttom: 0;
            }

          `}
        </style>
      </Fragment>
    )
  }
}

export default HelloSection