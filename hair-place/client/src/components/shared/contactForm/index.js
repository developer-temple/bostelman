import React, { Component, Fragment } from 'react'

//lib
import { colors } from '../../../lib/constants/css'

class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <div className='contact-form'>
          <p className='line' style={{ marginBottom: '.5rem' }}>Hi Kelli,</p>
          <p className='line'>My name is...</p>
          <input className='input' type='text' placeholder='Susie Q'/>
          <p className='line'>My email is...</p>
          <input className='input' type='text' placeholder='susie@q.com'/>
          <p className='line'>I'm interested in...</p>
          <input className='input' type='text' placeholder='a trim'/>
          <p className='line'>I'd like to come in around...</p>
          <input className='input' type='text' placeholder='Monday @ Noon'/>
          <p className='line'>Or maybe...</p>
          <input className='input' type='text' placeholder='Wednesday by 3'/>
          <p className='line' style={{ marginBottom: '.5rem' }}>Thanks!</p>
          <button className='submit-button'>Send Message</button>
        </div>
        <style jsx>
          {`
            .contact-form {
              width: 90%;
              margin: 3rem auto;
              border: 1px solid ${colors.purple};
              border-radius: 5px;
              padding: 1rem;
            }

            .line {
              font-size: 1.3rem;
              display: block;
            }

            .input {
              display: block;
              width: 100%;
              border: none;
              border-bottom: 1px solid ${colors.purple};
              font-size: 1.618rem;
              margin-bottom: .5rem;
            }

            .submit-button {
              background: ${colors.purple};
              color: ${colors.white};
              border: none;
              transition: all .2s ease-in-out;
              font-size: 1.618rem;
              padding: .25rem .5rem;
              border-radius: 5px;
            }
          `}
        </style>
      </Fragment>
    )
  }
}

export default ContactForm