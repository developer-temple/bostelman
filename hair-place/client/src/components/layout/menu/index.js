import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

//Lib
import { transitions, fonts } from '../../../lib/constants/css'

//Assets
import { images } from '../../../assets'

class Menu extends Component {
  render() {
    const { visibility } = this.props
    return (
      <Fragment>
        <div className={`menu-panel${visibility === false ? ' hidden' : ''}`}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <style jsx>
          {`
            .menu-panel {
              width: 100vw;
              height: 100vh;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 50;
              background: url('${images.menuBg}');
              transition: ${transitions.fast};
            }
            
            .menu-panel.hidden {
              transform: translateX(100%);
            }

            nav {
              position: absolute;
              top: 14vh;
              left: 1rem;
              color: purple;
              font-family: ${fonts.sansSerif};
            }

            ul {
              list-style-type: none;
            }

            li {
              font-size: 1.618rem;
              margin-bottom: .5rem;
              text-decoration: underline;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

Menu.propTypes = {
  visibility: PropTypes.bool.isRequired
}

export default Menu