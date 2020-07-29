import React, { Component } from 'react';
import './Contact.css';
import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl';
import emailjs from 'emailjs-com';

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAP,
  scrollZoom: false,
  dragPan: window.innerWidth > 576 ? true : false
});

class Contact extends Component {

  state = {
    errorMsg: false
  }

  _sendEmail() {
    const emailParams = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      company: this.refs.company.value,
      phone: this.refs.phone.value,
      message: this.refs.message.value,
    }

    //check for blanks
    if (emailParams.name.trim() === "" || emailParams.email.trim() === "" || emailParams.company.trim() === "" || emailParams.message.trim() === "") {
      this.setState({
        errorMsg: true
      })
    }

    //check if phone number is provided
    if (emailParams.phone.trim() === "") {
      emailParams.phone = "No number provided"
    }

    emailjs.send('gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, emailParams, process.env.REACT_APP_EMAIL_USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
          console.log('FAILED...', err);
    });
  }

  render() {
    return (
      <>
      <div className='contact-container'>
        <div className='contact-top-container'>
          <h1>contact embassy</h1>
          <p>Write us! If you are interested in conducting business with Embassy Ingredients, have any questions, or would like to request a sample, please let us know.</p>
        </div>
        <div className='contact-textfields'>
          <div className='contact-input-container'>
            <input
              className='contact-inputfield'
              type='text'
              ref='name'
              placeholder='Name'
              name='search'
              autoComplete='off'
            />
            <input
              className='contact-inputfield'
              type='text'
              ref='email'
              placeholder='Email'
              name='search'
              autoComplete='off'
            />
            <input
              className='contact-inputfield'
              type='text'
              ref='company'
              placeholder='Company'
              name='search'
              autoComplete='off'
            />
            <input
              className='contact-inputfield'
              type='text'
              ref='phone'
              placeholder='Phone Number (Optional)'
              name='search'
              autoComplete='off'
            />
          </div>
          <div className='contact-textarea-container'>
            <textarea 
              className='contact-textarea'
              ref='message'
              name='contact-text-area' rows='12'
              placeholder='Message...'
            />
            <div className='contact-textarea-btn' onClick={() => this._sendEmail()}>send</div>
          </div>
          {this.state.errorMsg ? <p className='contact-error-msg'>*Ensure all text fields are filled out correctly</p> : null}
        </div>
        <div className='contact-info-container'>
          <div className='contact-info-item'>
            <h2>General Contact</h2>
            <p>Toll-Free: <span>1-800-334-3371 (ext. 200)</span></p>
            <p>Phone: <span>1-(905)-789-3200</span></p>
            <p>Fax: <span>1-(905)-789-3201</span></p>
            <p>Email: <span>info@embassyingredients.com</span></p>
          </div>
          <div className='contact-info-item'>
            <h2>Already a Customer?</h2>
            <p>Toll-Free: <span>1-800-334-3371 (ext. 227)</span></p>
            <p>Phone: <span>1-(905)-789-3200</span></p>
            <p>Order Desk: <span>1-(905)-789-3227</span></p>
            <p>Email: <span>orderdesk@embassyingredients.com</span></p>
          </div>
          <div className='contact-info-item'>
            <h2>Head Office</h2>
            <p>5 Intermodal Drive, Unit 1-2</p>
            <p>Brampton, Ontario, L6T 5V9, Canada</p>
          </div>
          <div className='contact-info-item'>
            <h2>US Office</h2>
            <p>Jonathon York, Sales and Marketing Director</p>
            <p className='contact-info-us-office'>Email: <span>yorkj@EmbassyIngredients.com</span></p>
          </div>
        </div>
      </div>
      <div className='contact-map-container'>
        <Map
          style='mapbox://styles/mapbox/streets-v9'
          center={[-79.676876, 43.730793]}
          containerStyle={{
            height: '100%',
            width: '100%'
          }}
        >
          <ZoomControl/>
          <Marker
            coordinates={[-79.676876, 43.730793]}
            className='contact-map-marker'
            anchor="bottom">
            <img alt='map marker' src={require('../images/map-marker.png')}/>
          </Marker>
        </Map>
      </div>
      </>
    );
  }
}

export default Contact;