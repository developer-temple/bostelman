import React, { Component, Fragment } from 'react'

import HeroSection from './sections/hero'

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <main className='landing'>
          <HeroSection/>
        </main>
      </Fragment>
    )
  }
}

export default Landing