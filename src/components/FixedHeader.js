import React, { Component } from 'react';
import EmbassyLogo from '../images/logo.png';
import MobileMenu from '../images/mobile-menu.svg';
import { Link } from 'react-router-dom';
import './FixedHeader.css';

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
      hoveredHeader: null,
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

  _closeHamburgerMenu() {
    this.setState({
      hamburgerMenuOpen: false,
      mobileDropDownIdx: null
    })
  }

  _hoverFixedHeader(num) {
    this.setState({
      hoveredHeader: num
    })
  }

  _closeFixedHeader() {
    this.setState({
      hoveredHeader: null
    })
  }

  render() {
    const { mobileDropDownIdx, windowWidth, hoveredHeader, scrollPosition } = this.state;
    const { tablet, desktop } = this.mediaQuery;
    return (
      <div className={'fixed-header'}>
        <div className={this.getSecondaryHeaderStyle()}>
          <div className='fixed-contents-container'>
            <Link to="/embassyclone2" className={'embassy-logo-container'}>
              <img src={EmbassyLogo} className={windowWidth >= tablet ? 'embassy-logo' : 'embassy-logo-small'} alt='Embassy Logo' />
            </Link>
            {this.state.windowWidth >= this.mediaQuery.tablet ? (
              <nav className={'header-navigation'}>
                <ul>
                  <li><Link to="/mission" className={'header-dropdown'} onMouseEnter={() => this._hoverFixedHeader(1)} onMouseLeave={() => this._closeFixedHeader()}>ABOUT</Link>
                    <ul style={hoveredHeader === 1 ? {display: 'flex'} : {display: 'none'}} onMouseEnter={() => this._hoverFixedHeader(1)} onMouseLeave={() => this._closeFixedHeader()}>
                      <li><Link to="/mission">What We Do</Link></li>
                      <li><Link to="/history">Our History</Link></li>
                      <li><Link to="/leadership">Leadership</Link></li>
                      <li><Link to="/careers">Careers</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/all-products" className='header-navigation'>PRODUCTS</Link></li>
                  <li><Link to="/distributors" className='header-navigation'>DISTRIBUTORS</Link></li>
                  <li><Link to="/contact" className='header-navigation-last'>CONTACT</Link></li>
                </ul>
              </nav>
            ) : (
              <div className='mobile-nav'>
                <img src={MobileMenu} className='hamburger-menu' alt='Mobile Menu' onClick={() => this.setState({hamburgerMenuOpen: !this.state.hamburgerMenuOpen})}/>
              </div>
            )}
            {this.state.hamburgerMenuOpen && this.state.windowWidth < this.mediaQuery.tablet ? (
              <div className='mobile-nav-dropdown'>
                <div className='mobile-nav-dropdown-header'>
                  <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(1)}>
                    <a className='mobile-nav-dropdown-parent-header' href="/#">About</a>
                    <div className={mobileDropDownIdx === 1 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                  </div>
                  <div className={mobileDropDownIdx === 1 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>What We Do</Link>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Our History</Link>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Leadership</Link>
                  </div>
                </div>
                <div className='mobile-nav-dropdown-header'>
                  <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(2)}>
                    <a className='mobile-nav-dropdown-parent-header'href="/#">Products</a>
                    <div className={mobileDropDownIdx === 2 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                  </div>
                  <div className={mobileDropDownIdx === 2 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                    <Link to="/all-products" onClick={() => this._closeHamburgerMenu()}>All Products</Link>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Bakery Ingredients</Link>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Flavours</Link>
                  </div>
                </div>
                <div className='mobile-nav-dropdown-header'>
                  <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(3)}>
                    <a className='mobile-nav-dropdown-parent-header' href="/#">Customers</a>
                    <div className={mobileDropDownIdx === 3 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                  </div>
                  <div className={mobileDropDownIdx === 3 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Commercial Bakeries</Link>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Distributors</Link>
                    <Link to="/about" onClick={() => this._closeHamburgerMenu()}>Food Service</Link>
                    <Link to="/about" >Food Retailers</Link>
                  </div>
                </div>
                <div className='mobile-nav-dropdown-header-fixed'>
                  <a href="/#" onClick={() => this._closeHamburgerMenu()}>Contact</a>
                </div>
              </div>
            ) : null}
          </div>
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



{/* <li><a className={'header-dropdown'} onMouseEnter={() => this._hoverFixedHeader(2)} onMouseLeave={() => this._closeFixedHeader()} href="/#">PRODUCTS</a>
<ul style={hoveredHeader === 2 ? {display: 'flex'} : {display: 'none'}} onMouseEnter={() => this._hoverFixedHeader(2)} onMouseLeave={() => this._closeFixedHeader()}>
  <li><Link to="/all-products" onClick={() => this._closeFixedHeader()}>All Products</Link></li>
  <li><Link to="/about">Bakery Ingredients</Link></li>
  <li><Link to="/about">Flavours</Link></li>
</ul>
</li>
<li><a className={'header-dropdown'} onMouseEnter={() => this._hoverFixedHeader(3)} onMouseLeave={() => this._closeFixedHeader()} href="/#">CUSTOMERS</a>
<ul style={hoveredHeader === 3 ? {display: 'flex'} : {display: 'none'}} onMouseEnter={() => this._hoverFixedHeader(3)} onMouseLeave={() => this._closeFixedHeader()}>
  <li><Link to="/about">Commercial Bakeries</Link></li>
  <li><Link to="/about">Distributors</Link></li>
  <li><Link to="/about">Food Service</Link></li>
  <li><Link to="/about">Food Retailers</Link></li>
</ul>
</li> */}