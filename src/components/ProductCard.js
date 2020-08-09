import React, { Component } from 'react';
import './ProductCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CleanLabel from '../images/products/filters/clean-label.svg'
import GlutenFree from '../images/products/filters/gluten-free.svg'
import PlantBased from '../images/products/filters/plant-based.svg'

export class ProductCard extends Component {

  render() {
    const { element, openModal, productImage } = this.props
    return (
      <div className='product-card-container' onClick={() => openModal(element)}>
        <div className='product-card-margin'>
            <div className='product-card-img-container'>
              <LazyLoadImage src={productImage} alt={element.title} effect='blur' />
            </div>
            <div className='product-card-text'>
              <h2 className='product-card-name'>{element.title}</h2>
              <div className='product-card-bottom-container'>
                <div className='product-card-categories'>
                  <h3 className='product-card-category1'>{element.category1}</h3>
                  <h3 className='product-card-category2'>{element.category2 === "" ? <br/> : element.category2}</h3>
                </div>
                <div className='product-special-filters'>
                  {element.special.includes('plant-based') ? <img src={PlantBased} alt='plant-based' /> : null}
                  {element.special.includes('gluten-free') ? <img src={GlutenFree} alt='gluten-free' /> : null}
                  {element.special.includes('clean label') ? <img src={CleanLabel} alt='clean-label' /> : null}
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
