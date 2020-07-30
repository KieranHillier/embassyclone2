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
    const { mobileDropDownIdx, windowWidth, hoveredHeader } = this.state;
    const { tablet } = this.mediaQuery;
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
                  <li><Link to="/careers" className={'header-dropdown'} onMouseEnter={() => this._hoverFixedHeader(1)} onMouseLeave={() => this._closeFixedHeader()}>ABOUT</Link>
                    <ul style={hoveredHeader === 1 ? {display: 'flex'} : {display: 'none'}} onMouseEnter={() => this._hoverFixedHeader(1)} onMouseLeave={() => this._closeFixedHeader()}>     
                      <li><Link to="/careers" onClick={() => this._closeFixedHeader()}>Careers</Link></li>
                      <li><Link to="/leadership" onClick={() => this._closeFixedHeader()}>Leadership</Link></li>
                      <li><Link to="/history" onClick={() => this._closeFixedHeader()}>Our History</Link></li>
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

          </div>
        </div>
          {this.state.hamburgerMenuOpen && this.state.windowWidth < this.mediaQuery.tablet ? (
            <div className='mobile-nav-dropdown'>
              <div className='mobile-nav-dropdown-header'>
                <div className='mobile-nav-dropdown-parent' onClick={() => this.mobileDropDown(1)}>
                  <div className='mobile-nav-dropdown-parent-header'>About</div>
                  <div className={mobileDropDownIdx === 1 ? 'mobile-nav-up-arrow' : 'mobile-nav-down-arrow'}> </div>
                </div>
                <div className={mobileDropDownIdx === 1 ? 'mobile-nav-dropdown-child' : 'hidden'}>
                  <Link to="/careers" onClick={() => this._closeHamburgerMenu()}>Careers</Link>
                  <Link to="/leadership" onClick={() => this._closeHamburgerMenu()}>Leadership</Link>
                  <Link to="/history" onClick={() => this._closeHamburgerMenu()}>Our History</Link>
                </div>
              </div>
              <div className='mobile-nav-dropdown-header-fixed' onClick={() => this._closeHamburgerMenu()}>
                <Link to="/all-products">Products</Link>
              </div>
              <div className='mobile-nav-dropdown-header-fixed' onClick={() => this._closeHamburgerMenu()}>
                <Link to="/distributors">Distributors</Link>
              </div>
              <div className='mobile-nav-dropdown-header-fixed' onClick={() => this._closeHamburgerMenu()}>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          ) : null}
      </div>
    )
  }
}