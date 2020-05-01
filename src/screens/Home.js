import React, { Component } from 'react';
import './Home.css';
import { FixedHeader } from '../components/FixedHeader';
import { Fade } from 'react-slideshow-image';
import banner1 from '../images/home-banner-1.jpg';
import banner2 from '../images/home-banner-2.jpg';
import banner3 from '../images/home-banner-3.jpg';
import PhoneLogo from '../images/call-ico.svg';
 
const fadeImages = [
  '../images/home-banner-1.jpg',
  '../images/home-banner-2.jpg',
  '../images/home-banner-3.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={banner1} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={banner2} />
            <h2>Second Slide</h2>
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={banner3} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  )
}

export class Home extends Component {

    render() {
        return (
            <div>
              <div className={'entry-content'}>
                <FixedHeader />
                <Slideshow />
              </div>
            </div>
        )
    }
}
