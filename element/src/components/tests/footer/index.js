import React, { Component, Fragment } from 'react'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          Footer
        </footer>
        <style jsx>
          {`
            footer {
              height: 15vh;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default Footer