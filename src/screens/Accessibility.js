import React, { Component } from 'react'
import Policy from './Accessibility/Policy'
import Plan from './Accessibility/Plan'
import './Accessibility.css'

class Accessibility extends Component {
  constructor() {
    super()
    this.state = {
      isPolicy: true,
    }

    this.toggleComponent = this.toggleComponent.bind(this)
  }

  toggleComponent() {
    this.setState((prevState) => ({ isPolicy: !prevState.isPolicy }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div className="accessibility-container">
        <div className="accessibility-button-container">
          <button
            className={`accessibility-button ${this.state.isPolicy ? 'accessibility-button-active' : ''}`}
            onClick={this.toggleComponent}
          >
            AODA Policy
          </button>
          <button
            className={`accessibility-button ${!this.state.isPolicy ? 'accessibility-button-active' : ''}`}
            onClick={this.toggleComponent}
          >
            Multi-year Plan
          </button>
        </div>

        <div className="accessibility-content">
          {this.state.isPolicy ? <Policy /> : <Plan />}
        </div>
      </div>
    )
  }
}

export default Accessibility
