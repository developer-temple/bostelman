import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

//Components
import SocialBand from './socialBand'
import MenuButton from './menuButton'
import Menu from './menu'
import Footer from './footer'

class Layout extends Component {
  state = {
    socialBandVisibility: false,
    menuVisibility: false
  }

  

  toggleSocialBand = () => {
    this.setState(state => ({ socialBandVisibility: !state.socialBandVisibility }))
  }

  toggleMenu = () => {
    this.setState(state => ({ menuVisibility: !state.menuVisibility }))
  }

  render() {
    const { children } = this.props
    const { socialBandVisibility, menuVisibility } = this.state
    return (
      <Fragment>
        {/* <SocialBand visibility={socialBandVisibility} clickHandler={this.toggleSocialBand}/>
        <MenuButton clickHandler={this.toggleMenu}/>
        <Menu visibility={menuVisibility}/> */}
        { children }
        <Footer/>
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout