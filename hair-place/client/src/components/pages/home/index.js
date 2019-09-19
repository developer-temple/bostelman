import React, { Component, Fragment } from 'react'

//Components
import HeroSection from './sections/hero'
import HelloSection from './sections/hello'
import BlondeSection from './sections/blonde'
import ServicesSection from './sections/services'
import ScarfSection from './sections/scarf'
import ShopSection from './sections/shop'
import BrunetteSection from './sections/brunette'
import ContactSection from './sections/contact'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <HeroSection/>
          <HelloSection/>
          <BlondeSection/>
          <ServicesSection/>
          <ScarfSection/>
          <ShopSection/>
          <BrunetteSection/>
          <ContactSection/>
        </main>
      </Fragment>
    )
  }
}

export default HomePage