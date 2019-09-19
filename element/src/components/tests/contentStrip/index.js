import React, { Component, Fragment } from 'react'

class ContentStrip extends Component {
  render() {
    return (
      <Fragment>
        <div className='container'>
          <div className='inner'> 
            <h1>This is a Content Strip.</h1>
          </div>
        </div>
        <style jsx>
          {`
            .container {
              height: 70vh;
              background: white;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default ContentStrip