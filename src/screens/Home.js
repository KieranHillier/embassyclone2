import React, { Component } from 'react';
import './Home.css';
import { FixedHeader } from '../components/FixedHeader';
import { Footer } from '../components/Footer';
import { CSSTransitionGroup, CSSTransition } from 'react-transition-group';

const backgroundImages = [
  require('../images/home-banner-1.jpg'),
  require('../images/home-banner-2.jpg'),
  require('../images/home-banner-3.jpg')
];

const backgroundContent = [
  {
    title: 'Customized Flavours',
    body: 'Flavoring the wolrd with customized solutions.'
  },
  {
    title: 'Leaders in Clean Label Bakery Ingredients & Flavors',
    body: 'Creating innovative ingredients for exquisite food experiences.'
  },
  {
    title: 'Customized Bakery Ingredients',
    body: 'Combining creativity and science to provide our customers with the very best innovative flavors and bakery ingredients available.'
  },
]

export class Home extends Component {
  
  state = {
    backgroundIndex: 1,
    landingTextClasses: ['temp'],
    transition: false,
  }

  componentDidMount() {
    this.interval = this.startInterval()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.backgroundIndex !== prevState.backgroundIndex) {
      // this.setState({landingTextClasses: ['landing-text-hide']})
      // setTimeout(() => {
      //   this.setState({landingTextClasses: ['temp']})
      // })
      this.setState({transition: true})
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval() {
    return setInterval(() => {
      if (this.state.backgroundIndex < 2) {
        this.setState({backgroundIndex: this.state.backgroundIndex + 1})
      } else {
        this.setState({backgroundIndex: 0})
      }
    }, 8000)
  }

  // injectLandingText() {
  //   const { backgroundIndex, landingTextClasses } = this.state;
  //   return (
  //     <div className='landing-text'>
  //       <h2 className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].title}</h2>
  //       <p className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].body}</p>
  //     </div>
  //   )
  // }

  pauseInterval(idx) {
    if (idx === 3) {
      idx = 0
    } else if (idx === -1) {
      idx = 2
    }
    this.setState({backgroundIndex: idx})
    clearInterval(this.interval)
    // setTimeout(() => {
    //   this.interval = this.startInterval()
    // }, 8000)
  }

  render() {
    const { backgroundIndex, landingTextClasses, transition } = this.state;
    return (
      <div>
        <div className={'entry-content'}>
          <FixedHeader />
          <div className='landing-page-container'>
            <div style={{backgroundImage: `url(${backgroundImages[backgroundIndex]})`}} className='background-container'> 
              <a className='side-arrow-right' onClick={() => this.pauseInterval(backgroundIndex + 1)} alt='right-arrow'></a>
              <a className='side-arrow-left' onClick={() => this.pauseInterval(backgroundIndex - 1)} alt='left-arrow'></a>
              {/* <CSSTransitionGroup
                transitionName='landing-text-animate'
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}>
                <div key={1} className='landing-text'>
                  <h2 className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].title}</h2>
                  <p className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].body}</p>
                </div>
              </CSSTransitionGroup> */}
              {/* <CSSTransition in={transition} timeout={400} classNames='landing-text-animate'>
                <div className='landing-text'>
                  <h2 className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].title}</h2>
                  <p className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].body}</p>
                </div>
              </CSSTransition> */}
              <div key={backgroundIndex} className='landing-text'>
                <h2 className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].title}</h2>
                <p className={landingTextClasses[0]}>{backgroundContent[backgroundIndex].body}</p>
              </div>
              <div className='image-selector-container'>
                <div style={backgroundIndex === 0 ? {background: '#2cb34a'} : null} className='image-selector' onClick={() => this.pauseInterval(0)}></div>
                <div style={backgroundIndex === 1 ? {background: '#2cb34a'} : null} className='image-selector' onClick={() => this.pauseInterval(1)}></div>
                <div style={backgroundIndex === 2 ? {background: '#2cb34a'} : null} className='image-selector' onClick={() => this.pauseInterval(2)}></div>
              </div>
            </div>
          </div>
          <div className='green-connector-container'>
            <h2>Something Inspirational heh</h2>
          </div>
          <div className='white-connector-container'>

          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
