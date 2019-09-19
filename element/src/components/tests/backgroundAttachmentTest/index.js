import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class BackgroundAttachmentTest extends Component {
  render() {
    const { image } = this.props
    return (
      <Fragment>
        <div className='container'>
          <div className='inner'></div>
        </div>
        <style jsx>
          {`
            .container {
              background: url("${image.src}");
              background-size: cover;
              background-repeat: no-repeat;
              background-attachment: fixed;
              height: 100vh;
            }

            .inner {
              height: 100%;
              background: rgba(255, 255, 255, .8);
            }
          `}
        </style>
      </Fragment>
    )
  }
}

BackgroundAttachmentTest.propTypes = {
  image: PropTypes.object.isRequired
}

export default BackgroundAttachmentTest