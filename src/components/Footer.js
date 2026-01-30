import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import './Footer.css'

const certificationIcons = [
  require('../images/fixed-footer/brc2.png'),
  require('../images/fixed-footer/cor1.png'),
  require('../images/fixed-footer/peanut1.png'),
  require('../images/fixed-footer/gluten-free1.png'),
  require('../images/fixed-footer/zero-waste.png'),
  require('../images/fixed-footer/halal.png'),
  require('../images/fixed-footer/non-gmo.png'),
  require('../images/fixed-footer/organic.png'),
  require('../images/fixed-footer/ctpat.png'),
]

const mediaIcons = [
  require('../images/fixed-footer/fixed-twitter.png'),
  require('../images/fixed-footer/fixed-instagram.png'),
  require('../images/fixed-footer/fixed-linkedin.png'),
]

export class Footer extends Component {
  static contextType = GlobalContext
  state = {
    dropdownIdx: null,
  }

  _renderCertificationIcons = () => {
    return certificationIcons.map((link, idx) => (
      <img
        className="certification-icon"
        src={link}
        key={idx}
        alt="certification-logo"
      />
    ))
  }

  _toggleDropdown(num) {
    if (this.state.dropdownIdx === num) {
      this.setState({ dropdownIdx: null })
    } else {
      this.setState({ dropdownIdx: num })
    }
  }

  render() {
    const { dimensions, mediaQuery } = this.context
    const { dropdownIdx } = this.state
    return (
      <div className="footer-container">
        {dimensions.width >= mediaQuery.desktop ? (
          <div className="top-container">
            <div className="top-content-container">
              <div className="footer-section">
                <h2>Company</h2>
                <Link to="/all-products">Products</Link>
                <Link to="/distributors">Distributors</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/accessibility">Accessibility</Link>
              </div>
              <div className="footer-section">
                <h2>About</h2>
                <Link to="/careers">Careers</Link>
                <Link to="/leadership">Leadership</Link>
                <Link to="/history">Our History</Link>
                <Link to="/legal">Legal</Link>
              </div>
              <div className="footer-section">
                <h2>General Contact</h2>
                <p>1-800-334-3371 (ext.200)</p>
                <p>1-905-789-3200</p>
                <p>info@embassyingredients.com</p>
              </div>
              <div className="footer-section">
                <h2>Location</h2>
                <p>Embassy Ingredients Ltd</p>
                <p>5 Intermodal Drive</p>
                <p>Brampton, ON, Canada L6T 5V9</p>
              </div>
              <div className="footer-section">
                <h2>Certifications</h2>
                <div className="certification-icons">
                  {this._renderCertificationIcons()}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="top-container">
            <div
              className="mobile-footer-header"
              onClick={() => this._toggleDropdown(1)}
            >
              Company
            </div>
            {dropdownIdx === 1 ? (
              <div className="mobile-footer-section">
                <Link to="/all-products">Products</Link>
                <Link to="/distributors">Distributors</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/accessibility">Accessibility</Link>
              </div>
            ) : null}
            <div
              className="mobile-footer-header"
              onClick={() => this._toggleDropdown(2)}
            >
              About
            </div>
            {dropdownIdx === 2 ? (
              <div className="mobile-footer-section">
                <Link to="/careers">Careers</Link>
                <Link to="/leadership">Leadership</Link>
                <Link to="/history">Our History</Link>
                <Link to="/legal">Legal</Link>
              </div>
            ) : null}
            <div
              className="mobile-footer-header"
              onClick={() => this._toggleDropdown(3)}
            >
              General Contact
            </div>
            {dropdownIdx === 3 ? (
              <div className="mobile-footer-section">
                <p>1-800-334-3371 (ext.200)</p>
                <p>1-905-789-3200</p>
                <p>info@embassyingredients.com</p>
              </div>
            ) : null}
            <div
              className="mobile-footer-header"
              onClick={() => this._toggleDropdown(4)}
            >
              Location
            </div>
            {dropdownIdx === 4 ? (
              <div className="mobile-footer-section">
                <p>Embassy Ingredients Ltd</p>
                <p>5 Intermodal Drive</p>
                <p>Brampton, ON, Canada L6T 5V9</p>
              </div>
            ) : null}
            <div
              className="mobile-footer-header"
              onClick={() => this._toggleDropdown(5)}
            >
              Certifications
            </div>
            {dropdownIdx === 5 ? (
              <div className="mobile-footer-section">
                <div className="certification-icons">
                  {this._renderCertificationIcons()}
                </div>
              </div>
            ) : null}
          </div>
        )}
        <div className="bottom-container">
          <div className="bottom-content-container">
            <p>&#169; Copyright 2026 Embassy Ingredients</p>
            <div className="media-container">
              <a
                href="https://twitter.com/embassyingrdnts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mediaIcons[0]} alt="twitter icon" />
              </a>
              <a
                href="https://www.instagram.com/embassy_ingredients"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mediaIcons[1]} alt="instagram icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/embassyingredients/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mediaIcons[2]} alt="linkedin icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
