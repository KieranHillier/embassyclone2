import React, { Component } from 'react';
import './ProductCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = {
  'Cream & Pudding Cakes': require("../images/products/Cream & Pudding Cakes1.jpg"),
  'BakeryGlaze1': require("../images/products/Bakery Glaze1.jpg"),
}

export class ProductCard extends Component {

  render() {
    const { element, openModal, productImage } = this.props
    return (
      <div className='product-card-container' onClick={() => openModal(element)}>
        <div className='product-card-margin'>
            <div className='product-card-img-container'>
                <LazyLoadImage src={productImage} alt={element.title} afterLoad={console.log(element.title)} effect='blur' />
            </div>
            <div className='product-card-text'>
              <h2 className='product-card-name'>{element.title}</h2>
              <h3 className='product-card-category1'>{element.category1}</h3>
              <h3 className='product-card-category2'>{element.category2}</h3>
            </div>
        </div>
      </div>
    )
  }
}
