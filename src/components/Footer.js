import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  
  state = {
    backgroundIndex: 1,
  }

  render() {
    return (
      <div className='footer-container'>
        <div className='top-container'></div>
        <div className='bottom-container'></div>
      </div>
    )
  }
}
