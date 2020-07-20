import React, { Component } from 'react';
import DropdownArrow from '../images/dropdownArrow.svg';
import './Distributors.css';
import DistributorsData from '../data/distributors.json';
import DistributorChild from '../components/DistributorChild';

class Distributors extends Component {

  constructor() {
    super()
    this.state = {
      parents: {
        canada: false,
        usa: false,
      },
      provinces: {
        ontario: false,
        quebec: false,
        western: false,
        atlantic: false
      }, 
    }
  }

  _updateParent(parent) {
    const arr = {...this.state.parents}
    arr[parent] = !arr[parent]
    this.setState({
      parents: arr
    })
  }

  _updateProvince(province) {
    const arr = {...this.state.provinces}
    arr[province] = !arr[province]
    this.setState({
      provinces: arr
    })
  }

  _renderChildren(location) {
    return DistributorsData[location].map((element, idx) => (
      <DistributorChild element={element} key={idx} />
    ));
  }

  render() {
    const { parents, provinces } = this.state
    console.log(DistributorsData)
    return (
      <div className='distributors-container'>
          <div className='distributors-header-image'></div>
          <div className='distributors-content-container'>
              <div className='distributors-header-text'>
                <h1>Distributors</h1>
                <p>Embassy Ingredients has customers all over the world and we work with some of the largest and most recognized names in the food service and food product manufacturing inustries. We also server a wide range of bakeries and food processors both direct and through out Distributor and Agents partners.</p>
              </div>
              <div className='distributors-data-container'>
                <div className='distributors-parent' onClick={() => this._updateParent('canada')}>
                  <h2>Canada</h2>
                  <img className='distributors-icon' alt='' src={DropdownArrow} style={!parents.canada ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                </div>
                {parents.canada ? ( 
                  <>
                    <div className='distributors-province' onClick={() => this._updateProvince('ontario')}>
                      <h2>Ontario</h2>
                      <img className='distributors-icon' alt='' src={DropdownArrow} style={!provinces.ontario ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                    </div>
                    {provinces.ontario ? this._renderChildren('ontario') : null}
                    <div className='distributors-province' onClick={() => this._updateProvince('quebec')}>
                      <h2>Quebec</h2>
                      <img className='distributors-icon' alt='' src={DropdownArrow} style={!provinces.quebec ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                    </div>
                    {provinces.quebec ? this._renderChildren('quebec') : null}
                    <div className='distributors-province' onClick={() => this._updateProvince('western')}>
                      <h2>Western Canada</h2>
                      <img className='distributors-icon' alt='' src={DropdownArrow} style={!provinces.western ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                    </div>
                    <div className='distributors-province' onClick={() => this._updateProvince('atlantic')}>
                      <h2>Atlantic Canada</h2>
                      <img className='distributors-icon' alt='' src={DropdownArrow} style={!provinces.atlantic ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                    </div>
                  </>
                ) : null} 
                <div className='distributors-parent' onClick={() => this._updateParent('usa')}>
                  <h2>United States of America</h2>
                  <img className='distributors-icon' alt='' src={DropdownArrow} style={!parents.usa ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                </div>
                <div className='distributors-parent' onClick={() => this._updateParent('usa')}>
                  <h2>Mexico</h2>
                  <img className='distributors-icon' alt='' src={DropdownArrow} style={!parents.usa ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                </div>
                <div className='distributors-parent' onClick={() => this._updateParent('usa')}>
                  <h2>Central America</h2>
                  <img className='distributors-icon' alt='' src={DropdownArrow} style={!parents.usa ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                </div>
                <div className='distributors-parent' onClick={() => this._updateParent('usa')}>
                  <h2>Middle East &amp; South East Asia</h2>
                  <img className='distributors-icon' alt='' src={DropdownArrow} style={!parents.usa ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Distributors;