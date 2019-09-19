import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

//Lib
import { colors } from '../../../lib/constants/css'

class MenuButton extends Component {
  render() {
    const { clickHandler } = this.props
    return (
      <Fragment>
        <button className='menu-button' onClick={clickHandler}>
          <i className="fas fa-bars"></i>
        </button>
        <style jsx>
          {`
            .menu-button {
              border: none;
              background: transparent;
              color: ${colors.purple};
              position: fixed;
              top: 2rem;
              right: 1rem;
              z-index: 100;
              font-size: 1.618rem;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

MenuButton.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default MenuButton