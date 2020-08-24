import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import './Home.css';

const clIcons = [
  require('../images/home/home-cl1.png'),
  require('../images/home/home-cl2.png'),
  require('../images/home/home-cl3.png'),
  require('../images/home/home-cl4.png')
];

const clText = [
  'Natural Flavours & Colours',
  'No Modified Ingredients',
  'Whole Foods Compliant',
  'Passes Retailer Standards'
]

const homeIcons = [
  require('../images/home/home-icon1.png'),
  require('../images/home/home-icon2.png'),
  require('../images/home/home-icon3.png'),
  require('../images/home/home-icon4.png'),
  require('../images/home/home-icon5.png'),
  require('../images/home/home-icon6.png'),
]

const homeIconsText = [
  'R&D Bakery Lab',
  'Product Customization',
  'Flavour Lab',
  'Certified Flavourists',
  'Food Scientist',
  'Bakery Specialist'
]

const certificationIcons = [
  require('../images/fixed-footer/brc.png'),
  require('../images/fixed-footer/cor1.png'),
  require('../images/fixed-footer/peanut1.png'),
  require('../images/fixed-footer/gluten-free1.png'),
  require('../images/fixed-footer/halal.png'),
  require('../images/fixed-footer/non-gmo.png'),
  require('../images/fixed-footer/organic.png'),
  require('../images/fixed-footer/ctpat.png')
];

const backgroundContent = [
  {
    title: 'Customized Flavours',
    body: 'Flavouring the wolrd with customized solutions.'
  },
  {
    title: 'Customized Bakery Ingredients & Flavours',
    body: 'Combining creativity and science to provide our customers with the very best innovative flavours and bakery ingredients available'
  },
  {
    title: 'Customized Bakery Ingredients',
    body: 'Combining creativity and science to provide our customers with the very best innovative flavours and bakery ingredients available.'
  },
];

export class Home extends Component {
  static contextType = GlobalContext

  constructor() {
    super();
    this.state = {
      backgroundIndex: 1,
    }
  }

  _renderHomeIcons = () => {
    return homeIcons.map((link, idx) => (
      <div className='home-icon-container'>
        <img className='home-icon' src={link} key={idx} alt='home-icon'/>
        <p>{homeIconsText[idx]}</p>
      </div>
    ))
  }

  _renderCLIcons = () => {
    return clIcons.map((link, idx) => (
      <div className='home-cl-container'>
        <img className='home-cl-icon' src={link} key={idx} alt='cl-icon'/>
        <p>{clText[idx]}</p>
      </div>  
    ))
  }

  _renderCertifications = () => {
    return certificationIcons.map((link, idx) => (
      <div className='home-certification-icon-container'>
        <img className='home-certification-icon' src={link} key={idx} alt='certification-logo'/>
      </div>
    ))
  }

  render() {
    const { backgroundIndex } = this.state;
    const { dimensions, mediaQuery } = this.context;
    return (
      <div>
        <div className='entry-content'>
          <div className='landing-page-container'>
            <div className='background-container'> 
              <div className='home-text-container'>
                <div className='landing-text'>
                  <h2>{backgroundContent[backgroundIndex].title}</h2>
                  <p>{backgroundContent[backgroundIndex].body}</p>
                  <div className='home-landing-btn'>
                    <Link to="/all-products">our products</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='home-promise-container'>
            <div className='home-promise-text'>
              <p>brand promise</p>
              <h2>Tailored Approach - Fanatically Bakery Focused - Customer Obsessed</h2>
            </div>
          </div>
          <div className='home-body-container'>
            <div className='home-body-text'>
              <div className='home-body-top-container'>
                <div className='home-body-left-container'>
                  <h2>Unlimited <span className='home-body-thin'>Possibilities</span></h2>
                  <p>No matter what you are looking for, with our team of Certified Flavourists, Bakery Specialists, and Food Scientists, Embassy offers a variety of formats and concentrates to meet your product and process requirements.</p>
                </div>
                <div className='home-body-right-container icons-container'>
                  <div className='home-icons home-icons-padding'>
                    {this._renderHomeIcons()}
                  </div>
                </div>
              </div>

              {dimensions.width >= mediaQuery.desktop ? ( 
                <div className='home-body-bottom-container'>
                  <div className='home-body-left-container'>
                    <div className='home-cl-icons'>
                      {this._renderCLIcons()}
                    </div>
                  </div>
                  <div className='home-body-right-container'>
                    <h2>Clean-Label <span className='home-body-thin'>Matters</span></h2>
                    <p>Consumers demand it and we create it! Our quality flavours, bakery mixes, and bases are made from the highest quality ingredients. Our focus is to use ingredients customers can pronounce.</p>
                  </div>
                </div>
              ) : (
                <div className='home-body-top-container'>
                  <div className='home-body-left-container'>
                    <h2>Clean-Label <span className='home-body-thin'>Matters</span></h2>
                    <p>Consumers demand it and we create it! Our quality flavours, bakery mixes, and bases are made from the highest quality ingredients. Our focus is to use ingredients customers can pronounce.</p>
                  </div>
                  <div className='home-body-right-container icons-container'>
                    <div className='home-icons mini-cl-icons'>
                      {this._renderCLIcons()}
                    </div>
                  </div>
                </div>       
              )}
            </div>
          </div>
          <div className='home-contact-container'>
            <div className='home-contact-content-container'>
              <div className='home-contact-text'>
                <div className='home-contact-text-container'>
                  <h2>Like what you see?</h2>
                  <p>If we don't have it we will make it for you!</p>
                </div>
              </div>
              <div className='home-contact-btn'>
                <Link to="/contact">contact us</Link>
              </div>
            </div>
          </div>
          <div className='home-body-container'>
            <div className='home-body-text'>
              <div className='home-body-top-container'>
                <div className='home-body-left-container'>
                  <h2>Leaders <span className='home-body-thin'>in Market Trends</span></h2>
                  <p>Innovation is at Embassy’s core. We find inspiration from around the world and develop innovative products before the trend emerges in your mark.</p>
                </div>
                <div className='home-body-right-container'>
                  <div className='home-img-container image-1'></div>
                </div>
              </div>
              {dimensions.width >= mediaQuery.desktop ? ( 
                <div className='home-body-bottom-container'>
                  <div className='home-body-left-container'>
                    <div className='home-img-container image-2'></div>
                  </div>
                  <div className='home-body-right-container'>
                    <h2>Unmatched <span className='home-body-thin'>Quality</span></h2>
                    <p>Our unique approach combines the expertise of Certified Flavourists, Bakery Specialists, and Food Scientists, guaranteeing superior product manufacturing and advanced ingredient development.</p>
                  </div>
                </div>
              ) : (
                <div className='home-body-top-container'>
                  <div className='home-body-left-container'>
                    <h2>Unmatched <span className='home-body-thin'>Quality</span></h2>
                    <p>Our unique approach combines the expertise of Certified Flavourists, Bakery Specialists, and Food Scientists, guaranteeing superior product manufacturing and advanced ingredient development.</p>
                  </div>
                  <div className='home-body-right-container'>
                    <div className='home-img-container image-2'></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='home-contact-container'>
            <div className='home-contact-content-container second-container'>
              <div className='home-contact-text'>
                <div className='home-contact-text-container'>
                  <h2>Interested in our products?</h2>
                  <p>Come take a look!</p>
                </div>
              </div>
              <div className='home-contact-btn'>
                <Link to="/all-products">our products</Link>
              </div>
            </div>
          </div>
          <div className='home-certifications-container'>
            <div className='home-certifications'>
              {this._renderCertifications()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
