import React, { Component, Fragment } from 'react'

//Components
import Layout from '../layout'
import HomePage from '../pages/home'
import Router from '../router'

//Lib
import { fonts } from '../../lib/constants/css'

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Layout>
          <HomePage/>
        </Layout> */}
        <Router/>
        <style jsx global>
          {`
            @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display+SC:400,700');
            
            :root {
              box-sizing: border-box;
            }

            *, *::after, *::before {
              box-sizing: inherit;
              margin: 0;
              padding: 0;
            }

            body {
              font-family: ${fonts.sansSerif};
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default App