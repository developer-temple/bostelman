import React, { Component, Fragment } from 'react'

//Components
import RotatedHeading from '../../../../shared/rotatedHeading'
import ServiceTile from '../../../../shared/serviceTile'

//Lib
import { servicesHeading, servicesText } from '../../../../../lib/constants/content'
import { colors } from '../../../../../lib/constants/css'
class ServicesSection extends Component {
  render() {
    return (
      <Fragment>
        <section className='services-section'>
          <div className='heading'>
            <RotatedHeading color={colors.blue} text={servicesHeading}/>
          </div>
          <ServiceTile 
            service={{ name: 'Service1', color: 'red' }}
            gridArea="1"/>
          <ServiceTile 
            service={{ name: 'Service2', color: 'blue' }}
            gridArea="2"/>
            <ServiceTile 
            service={{ name: 'Service3', color: 'green' }}
            gridArea="3"/>
            <ServiceTile 
            service={{ name: 'Service4', color: 'pink' }}
            gridArea="4"/>
            <ServiceTile 
            service={{ name: 'Service5', color: 'rose-gold' }}
            gridArea="5"/>
            <ServiceTile 
            service={{ name: 'Service6', color: 'dodgerBlue' }}
            gridArea="6"/>
            <ServiceTile 
            service={{ name: 'Service7', color: 'aqua' }}
            gridArea="7"/>
            <ServiceTile 
            service={{ name: 'Service8', color: 'purple' }}
            gridArea="8"/>
        </section>
        <style jsx>
          {`
            .services-section {
              width: 100vw;
              height: 100vh;
              display: grid;
            }
              

            .heading {
              padding: 3rem 0;
            }
            
          `}
        </style>
      </Fragment>
    )
  }
}

export default ServicesSection