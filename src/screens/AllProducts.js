import React, { Component } from 'react';
import './AllProducts.css';
import { GlobalContext } from '../context/GlobalState';

export class AllProducts extends Component {
  static contextType = GlobalContext

  state = {

  }

  render() {
    
    console.log(this.context)
    return (
      <div className='filter-container'>
          <div className='filter-toggle-container'>
            <div onClick={() => this.context.updateProducts()}>test</div>
            <p>{this.context.language}</p>
          </div>
          <div className='filter-search-container'>
              <div className='filter-searchbar-container'></div>
          </div>
      </div>
    )
  }
}
