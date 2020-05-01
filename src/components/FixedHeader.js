import React, { Component } from 'react';
import PhoneLogo from '../images/call-ico.svg';
import EmailLogo from '../images/msg-ico.svg';
import EmbassyLogo from '../images/logo.png';
import './FixedHeader.css';

export class FixedHeader extends Component {

    phoneClick = () => {
      console.log('phone')
    }

    emailClick = () => {
      console.log('email')
    }

    render() {
        return (
            <div>
              <div className={'entry-content'}>
                <div className={'fixed-header'}>
                  <div className={'primary-header'}>
                    <div className={'logo-container'} onClick={() => this.phoneClick()}>
                      <img src={PhoneLogo} className={'logo-container-svg'} alt='Phone Logo' />
                      <p className={'primary-header-text'}>1-800-334-3371</p>
                    </div>
                    <div className={'logo-container'} onClick={() => this.emailClick()}>
                      <img src={EmailLogo} alt='Email Logo' />
                      <p className={'primary-header-text'}>info@embassyingredients.com</p>
                    </div>
                  </div>
                  <div className={'secondary-header'}>
                    <img src={EmbassyLogo} alt='Embassy Logo' />
                    <nav className={'header-navigation'}>
                      <ul>
                        <li><a href="#">ABOUT</a>
                          <ul>
                            <li><a href="#">ABOUT THE COMPANY</a></li>
                            <li><a href="#">JOIN OUR TEAM</a></li>
                          </ul>
                        </li>
                        <li><a href="#">PRODUCTS</a>
                          <ul>
                            <li><a href="#">FLAVORS</a></li>
                            {/* <li><a href="#">BAKERY INGREDIENTS</a></li>
                            <li><a href="#">CLEAN LABEL</a></li>
                            <li><a href="#">GLUTEN FREE</a></li>
                            <li><a href="#">FUNCTIONAL INGREDIENTS</a></li>
                            <li><a href="#">PAN RELEASE AGENT</a></li>
                            <li><a href="#">BAKERY GLAZE</a></li>
                            <li><a href="#">PARTNER PRODUCTS</a></li> */}
                          </ul>
                        </li>
                        <li><a href="#">INDUSTRIES SERVED</a></li>
                        <li><a href="#">DISTRIBUTORS</a>
                          <ul>
                            <li><a href="#">DISTRIBUTORS AND AGENTS</a></li>
                            <li><a href="#">CANADA</a></li>
                            {/* <li><a href="#">UNITED STATES</a></li>
                            <li><a href="#">MEXICO</a></li>
                            <li><a href="#">MIDDLE EAST AND SOUTH-EAST ASIA</a></li> */}
                          </ul>
                        </li>
                        <li><a href="#">CONTACT</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
