import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const mediaQuery = {
  desktop: 992,
  tablet: 800,
  phone: 576,
}

export class Footer extends Component {
  
  state = {
    backgroundIndex: 1,
  }

  render() {
    return (
      <div className='footer-container'>
        <div className='top-container'>
          <div className='footer-section'>
            <h2>Company</h2>
            <Link to="/about">Products</Link>
            <Link to="/about">Distributors</Link>
          </div>
          <div className='footer-section'>
            <h2>About Us</h2>
            <Link to="/about">What We Do</Link>
            <Link to="/about">Our History</Link>
            <Link to="/about">Leadership Team</Link>
            <Link to="/about">Careers</Link>
          </div>
          <div className='footer-section'>
            <h2>General Contact</h2>
            <p>1-800-334-3371 (ext.200)</p>
            <p>1-(905)-789-3200</p>
            <p>info@embassyingredients.com</p>
          </div>
          <div className='footer-section'>
            <div className='empty-header'></div>
            <p>Corporate Office:</p>
            <p>Phone: 1 (905) 789-3200</p>
            <p>Email: info@embassyingredients.com</p>
          </div>
          <div className='footer-section'>
            <div className='empty-header'></div>
            <p>Hours of Operation:</p>
            <p>Monday - Friday</p>
            <p>8:00am - 5:00pm</p>
          </div>
          <div className='footer-section'>
            <h2>Certifications</h2>
            <p>1-800-334-3371 (ext. 200)</p>
            <p>1-(905)-789-3200</p>
            <p>Email: info@embassyingredients.com</p>
          </div>
        </div>
        <div className='bottom-container'>
          <p>Copyright 2020 Embassy Ingredients</p>
          <div className='media-container'>
            <img src={""}/>
            <img src={""}/>
            <img src={""}/>
          </div>
        </div>
      </div>
    )
  }
}
