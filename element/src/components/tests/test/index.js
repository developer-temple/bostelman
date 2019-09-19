import React, { Component, Fragment } from 'react'

import BackgroundAttachmentTest from '../backgroundAttachmentTest'
import ContentStrip from '../contentStrip'
import Footer from '../footer'

import { IMAGES } from '../../../assets'

class Test extends Component {
  render() {
    const { brunette3, redhead1, kid1, man4 } = IMAGES
    return (
      <Fragment>
        <BackgroundAttachmentTest image={brunette3}/>
        <ContentStrip/>
        <BackgroundAttachmentTest image={kid1}/>
        <ContentStrip/>
        <BackgroundAttachmentTest image={man4}/>
        <ContentStrip/>
        <BackgroundAttachmentTest image={redhead1}/>
        <Footer/>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700');

            :root {
              box-sizing: border-box;
            }
  
            *, *::after, *::before {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }
  
            body {
              font-family: 'Playfair Display', sans-serif;
              height: 300vh;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Test