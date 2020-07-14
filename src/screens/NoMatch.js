import React, { Component } from 'react';
import './NoMatch.css';

class NoMatch extends Component {
  render() {
    return (
      <div className='error-container'>
        <h1>404 Sorry Page Not Found!</h1>
      </div>
    );
  }
}

export default NoMatch;