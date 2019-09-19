import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

//Lib
import { colors, transitions } from '../../../lib/constants/css'

class SocialBand extends Component {
  render() {
    const { visibility, clickHandler } = this.props
    return (
      <Fragment>
        <div className={`social-band${visibility === false ? ' hidden' : ''}`}>
          <span><i className="fab fa-facebook-f"></i></span>
          <span><i className="fab fa-twitter"></i></span>
          <span><i className="fab fa-instagram"></i></span>
          <span onClick={clickHandler}><i className="fas fa-share-alt"></i></span>
        </div>
        <style jsx>
          {`
            .social-band {
              background-color: ${colors.purple};
              color: ${colors.white};
              position: fixed; 
              left: 0;
              top: 1rem;
              border-radius: 0 100px 100px 0;
              z-index: 100;
              font-size: 1.618rem;
              padding: 1rem;
              transition: ${transitions.fast};
            }

            .social-band.hidden {
              transform: translateX(-71%);
            }

            .social-band span {
              cursor: pointer;
            }

            .social-band span:not(:last-of-type) {
              margin-right: 1rem;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

SocialBand.propTypes = {
  visibility: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default SocialBand