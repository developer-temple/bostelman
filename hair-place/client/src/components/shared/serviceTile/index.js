import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class ServiceTile extends Component {
  render() {
    const { gridArea, service } = this.props
    return (
      <Fragment>
        <div className='service-tile'>
          <p>{service.name}</p>
        </div>
        <style jsx>
          {`
            .service-tile {
              grid-area: ${gridArea};
              background-color: ${service.color};
              height: 50vw;
              width: 50vw;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

ServiceTile.propTypes = {
  service: PropTypes.shape({}).isRequired,
  gridArea: PropTypes.string.isRequired
}

export default ServiceTile