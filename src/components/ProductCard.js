import React, { Component } from 'react';
import './ProductCard.css';
import { GlobalContext } from '../context/GlobalState';
import HomeBanner from '../images/home-banner-1.jpg'

export class ProductCard extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    const { element } = this.props
    return (
      <div className='product-card-container'>
        <div className='product-card-margin'>
            <div className='product-card-img-container'>
                <img src={element.img} />
            </div>
            <h2 className='product-card-name'>{element.title}</h2>
            <h3 className='product-card-category1'>{element.category1}</h3>
            <h3 className='product-card-category2'>{element.category2}</h3>
        </div>
      </div>
    )
  }
}
