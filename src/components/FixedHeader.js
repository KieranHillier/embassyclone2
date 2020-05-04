import React, { Component } from 'react';
import PhoneLogo from '../images/call-ico.svg';
import EmailLogo from '../images/msg-ico.svg';
import EmbassyLogo from '../images/logo.png';
import MobileMenu from '../images/mobile-menu.svg';
import './FixedHeader.css';

const DesktopNav = () => (
  <nav className={'header-navigation'}>
    <ul>
      <li><a className={'header-dropdown'} href="#">ABOUT</a>
        <ul>
          <li><a href="#">ABOUT THE COMPANY</a></li>
          <li><a href="#">JOIN OUR TEAM</a></li>
        </ul>
      </li>
      <li><a className={'header-dropdown'} href="#">PRODUCTS</a>
        <ul>
          <li><a href="#">FLAVORS</a></li>
          <li><a href="#">BAKERY INGREDIENTS</a></li>
          <li><a href="#">CLEAN LABEL</a></li>
          <li><a href="#">GLUTEN FREE</a></li>
          <li><a href="#">FUNCTIONAL INGREDIENTS</a></li>
          <li><a href="#">PAN RELEASE AGENT</a></li>
          <li><a href="#">BAKERY GLAZE</a></li>
          <li><a href="#">PARTNER PRODUCTS</a></li>
        </ul>
      </li>
      <li><a href="#">INDUSTRIES SERVED</a></li>
      <li><a className={'header-dropdown'} href="#">DISTRIBUTORS</a>
        <ul>
          <li><a href="#">DISTRIBUTORS AND AGENTS</a></li>
          <li><a href="#">CANADA</a></li>
          <li><a href="#">UNITED STATES</a></li>
          <li><a href="#">MEXICO</a></li>
          <li><a href="#">MIDDLE EAST AND SOUTH-EAST ASIA</a></li>
        </ul>
      </li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>
);

export class FixedHeader extends Component {

  constructor(){
    super()

    this.mediaQuery = {
      desktop: 1200,
      tablet: 952,
      phone: 576,
    };

    this.state = {
      windowWidth: window.innerWidth,
      hamburgerMenuOpen: false,
      mobileDropDownIdx: null,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({windowWidth: window.innerWidth})
    });
  }

  phoneClick = () => {
    console.log('phone')
  }

  emailClick = () => {
    console.log('email')
  }

  mobileDropDown = (index) => {
    if (index === this.state.mobileDropDownIdx) {
      this.setState({mobileDropDownIdx: 0})
    } else {
      this.setState({mobileDropDownIdx: index})
    }
    console.log(this.state.mobileDropDownIdx)
  }

  render() {
    const { mobileDropDownIdx } = this.state;
    console.log(this.state)
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
            <div className={this.state.windowWidth > this.mediaQuery.tablet ? 'secondary-header' : 'secondary-header-mobile'}>
              <img src={EmbassyLogo} className='embassy-logo' alt='Embassy Logo' />
              {this.state.windowWidth > this.mediaQuery.tablet ?
                <DesktopNav /> :
                <div className='mobile-nav'>
                  <img src={MobileMenu} className='hamburger-menu' alt='Mobile Menu' onClick={() => this.setState({hamburgerMenuOpen: !this.state.hamburgerMenuOpen})}/>
                </div>
              }
              {this.state.hamburgerMenuOpen && this.state.windowWidth < this.mediaQuery.tablet ? (
                <div className='mobile-nav-dropdown'>
                  <div className='mobile-nav-dropdown-header'>
                    <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(1)}>
                      <a className='mobile-nav-dropdown-parent-header' href="#">About</a>
                      <div className={mobileDropDownIdx === 1 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                    </div>

                    <div className={mobileDropDownIdx === 1 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                      <a href="#">ABOUT THE COMPANY</a>
                      <a href="#">JOIN OUR TEAM</a>
                    </div>
                  </div>
                  <div className='mobile-nav-dropdown-header'>
                    <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(2)}>
                      <a className='mobile-nav-dropdown-parent-header'href="#">Products</a>
                      <div className={mobileDropDownIdx === 2 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                    </div>
                    <div className={mobileDropDownIdx === 2 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                      <a href="#">FLAVORS</a>
                      <a href="#">BAKERY INGREDIENTS</a>
                      <a href="#">CLEAN LABEL</a>
                      <a href="#">GLUTEN FREE</a>
                      <a href="#">FUNCTIONAL INGREDIENTS</a>
                      <a href="#">PAN RELEASE AGENT</a>
                      <a href="#">BAKERY GLAZE</a>
                      <a href="#">PARTNER PRODUCTS</a>
                    </div>
                  </div>
                  <div className='mobile-nav-dropdown-header-fixed'>
                    <a href="#">Industries Served</a>
                  </div>
                  <div className='mobile-nav-dropdown-header'>
                    <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(3)}>
                      <a className='mobile-nav-dropdown-parent-header' href="#">About</a>
                      <div className={mobileDropDownIdx === 3 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                    </div>
                    <div className={mobileDropDownIdx === 3 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                      <a href="#">ABOUT THE COMPANY</a>
                      <a href="#">JOIN OUR TEAM</a>
                    </div>
                  </div>
                  <div className='mobile-nav-dropdown-header-fixed'>
                    <a href="#">Contact</a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
