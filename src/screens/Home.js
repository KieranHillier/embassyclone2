import React, { Component } from 'react';
import './Home.css';

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
];

export class Home extends Component {
  
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = {
      backgroundIndex: 1,
      landingTextClasses: ['temp'],
      transition: false,
    }
  }

  componentDidMount() {
    this.interval = this.startInterval()
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

  pauseInterval(idx) {
    if (idx === 3) {
      idx = 0
    } else if (idx === -1) {
      idx = 2
    }
    this.setState({backgroundIndex: idx})
    clearInterval(this.interval)
  }

  render() {
    const { backgroundIndex } = this.state;
    return (
      <div>
        <div className={'entry-content'}>

          <div className='landing-page-container'>
            <div style={{backgroundImage: `url(${backgroundImages[backgroundIndex]})`}} className='background-container'> 
              <div className='side-arrow-right' onClick={() => this.pauseInterval(backgroundIndex + 1)} alt='right-arrow'></div>
              <div className='side-arrow-left' onClick={() => this.pauseInterval(backgroundIndex - 1)} alt='left-arrow'></div>
          
              <div key={backgroundIndex} className='landing-text'>
                <h2 ref={this.wrapperRef}>{backgroundContent[backgroundIndex].title}</h2>
                <p>{backgroundContent[backgroundIndex].body}</p>
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
        </div>
      </div>
    )
  }
}
