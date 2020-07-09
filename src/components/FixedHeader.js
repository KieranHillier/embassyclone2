import React, { Component } from 'react';
import PhoneLogo from '../images/call-ico.svg';
import EmailLogo from '../images/msg-ico.svg';
import EmbassyLogo from '../images/logo.png';
import MobileMenu from '../images/mobile-menu.svg';
import { Link } from 'react-router-dom';
import './FixedHeader.css';

const DesktopNav = () => (
  <nav className={'header-navigation'}>
    <ul>
      <li><a className={'header-dropdown'} href="/#">ABOUT</a>
        <ul>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/history">Our History</Link></li>
          <li><Link to="/leadership">Leadership</Link></li>
        </ul>
      </li>
      <li><a className={'header-dropdown'} href="/#">PRODUCTS</a>
        <ul>
          <li><Link to="/all-products">All Products</Link></li>
          <li><Link to="/about">Bakery Ingredients</Link></li>
          <li><Link to="/about">Flavours</Link></li>
        </ul>
      </li>
      <li><a className={'header-dropdown'} href="/#">CUSTOMERS</a>
        <ul>
          <li><Link to="/about">Commercial Bakeries</Link></li>
          <li><Link to="/about">Distributors</Link></li>
          <li><Link to="/about">Food Service</Link></li>
          <li><Link to="/about">Food Retailers</Link></li>
        </ul>
      </li>
      <li><a className='header-navigation-last' href="/#">CONTACT</a></li>
    </ul>
  </nav>
);

export class FixedHeader extends Component {

  constructor(){
    super()
    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      phone: 576,
    };

    this.state = {
      windowWidth: window.innerWidth,
      scrollPosition: window.pageYOffset,
      hamburgerMenuOpen: false,
      mobileDropDownIdx: null,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({windowWidth: window.innerWidth})
    });

    window.addEventListener('scroll', () => {
      this.setState({scrollPosition: window.pageYOffset})
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
  }

  getSecondaryHeaderStyle() {
    if (this.state.windowWidth < this.mediaQuery.tablet) {
      return 'secondary-header-mobile'
    } else if (this.state.scrollPosition > 70) {
      return 'secondary-header-scrolled'
    } else {
      return 'secondary-header'
    }
  }

  render() {
    const { mobileDropDownIdx, windowWidth } = this.state;
    const { phone, tablet } = this.mediaQuery;
    return (
      <div className={'fixed-header'}>
        <div className={this.getSecondaryHeaderStyle()}>
          <Link to="/embassyclone2" className={'embassy-logo-container'}>
            <img src={EmbassyLogo} className={windowWidth >= tablet ? 'embassy-logo' : 'embassy-logo-small'} alt='Embassy Logo' />
          </Link>
          {this.state.windowWidth >= this.mediaQuery.tablet ?
            <DesktopNav /> :
            <div className='mobile-nav'>
              <img src={MobileMenu} className='hamburger-menu' alt='Mobile Menu' onClick={() => this.setState({hamburgerMenuOpen: !this.state.hamburgerMenuOpen})}/>
            </div>
          }
          {this.state.hamburgerMenuOpen && this.state.windowWidth < this.mediaQuery.tablet ? (
            <div className='mobile-nav-dropdown'>
              <div className='mobile-nav-dropdown-header'>
                <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(1)}>
                  <a className='mobile-nav-dropdown-parent-header' href="/#">About</a>
                  <div className={mobileDropDownIdx === 1 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                </div>

                <div className={mobileDropDownIdx === 1 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                  <Link to="/about">What We Do</Link>
                  <Link to="/about">Our History</Link>
                  <Link to="/about">Leadership</Link>
                </div>
              </div>
              <div className='mobile-nav-dropdown-header'>
                <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(2)}>
                  <a className='mobile-nav-dropdown-parent-header'href="/#">Products</a>
                  <div className={mobileDropDownIdx === 2 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                </div>
                <div className={mobileDropDownIdx === 2 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                  <Link to="/all-products">All Products</Link>
                  <Link to="/about">Bakery Ingredients</Link>
                  <Link to="/about">Flavours</Link>
                </div>
              </div>
              <div className='mobile-nav-dropdown-header'>
                <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(3)}>
                  <a className='mobile-nav-dropdown-parent-header' href="/#">Customers</a>
                  <div className={mobileDropDownIdx === 3 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                </div>
                <div className={mobileDropDownIdx === 3 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                  <Link to="/about">Commercial Bakeries</Link>
                  <Link to="/about">Distributors</Link>
                  <Link to="/about">Food Service</Link>
                  <Link to="/about">Food Retailers</Link>
                </div>
              </div>
              <div className='mobile-nav-dropdown-header-fixed'>
                <a href="/#">Contact</a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}


// <div className={windowWidth > phone ? 'primary-header' : 'hidden'}>
// <div className={'logo-container'} onClick={() => this.phoneClick()}>
//   <img src={PhoneLogo} className={'logo-container-svg'} alt='Phone Logo' />
//   <p className={'primary-header-text'}>1-800-334-3371</p>
// </div>
// <div className={'logo-container'} onClick={() => this.emailClick()}>
//   <img src={EmailLogo} alt='Email Logo' />
//   <p className={'primary-header-text'}>info@embassyingredients.com</p>
// </div>
// </div>
