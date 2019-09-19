import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

//Lib
import { fonts, colors } from '../../../lib/constants/css'
class RotatedHeading extends Component {
  render() {
    const { rotation, text, color } = this.props
    return (
      <Fragment>
        <div className='rotated-heading-wrapper'>
          <div className='rotated-heading'> 
            <h2>{text}</h2>
          </div>
        </div>
        <style jsx>
          {`
            .rotated-heading-wrapper {
              transform: rotate(-${rotation});
              font-size: 2rem;
              font-family: ${fonts.serif};
              background: ${color};
              color: ${color};
              text-align: center;
              width: 80%;
              margin: 0 auto;
              border-radius: 5px;
            }

            .rotated-heading {
              background: ${colors.white};
              border: 1px solid ${color};
              transform: rotate(${rotation});
              padding: 1rem 0;
              border-radius: 5px;
            }
          `}
        </style>
      </Fragment>
    )
  }
} 

RotatedHeading.propTypes = {
  rotation: PropTypes.string,
  text: PropTypes.string.isRequired
}

RotatedHeading.defaultProps = {
  rotation: '10deg'
}

export default RotatedHeading