import React, { Component, Fragment } from "react"

//Components
import Landing from '../landing'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Landing/>
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
          }
        `}
        </style>
      </Fragment>
    )
  }
}

export default App