import React, { Component } from 'react';
import './ProductFilter.css';
import '../screens/AllProducts.css';
import DropdownArrow from '../images/dropdownArrow.svg';

export class ProductFilter extends Component {
  constructor(props) {
      super(props)
      this.state = {
        windowWidth: window.innerWidth,
        filterToggle: false
      }
      this.mediaQuery = {
        desktop: 992,
        tablet: 800,
        phone: 576,
      }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({windowWidth: window.innerWidth})
    });
  }

  _filterToggle() {
    this.setState({ filterToggle: !this.state.filterToggle })
  }

  render() {
    const { removeFilters, dropdownToggle, updateCheckbox, updateCheckboxChild, parentState } = this.props
    const { windowWidth, filterToggle } = this.state
    const { desktop } = this.mediaQuery
    return (
      <>
        {windowWidth < desktop ? (
          <>
            <div className='filter-toggle-min' onClick={() => this._filterToggle()}>
              <div className='filter-toggle-btn'>refine by</div>      
            </div>
            {filterToggle ? (
              <div className='filter-min-container'>
                <div className='filter-min-item filter-min-parent' onClick={() => updateCheckbox('Bakery Mixes')} style={parentState.sideFilters.includes('Bakery Mixes') ? {background: '#f3f0f0'} : null}>
                  <p>Bakery Mixes</p>
                  <img className='filter-dropdown-arrow' alt='' src={DropdownArrow} style={!parentState.bakeryDropDown ? {transform: 'translateY(-3px) rotate(180deg)'} : null} onClick={() => dropdownToggle('bakeryDropDown', 'Bakery Mixes')} />
                </div>
                {parentState.bakeryDropDown ? (
                  <>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Dessert')} style={parentState.sideFiltersChild.includes('Dessert') ? {background: '#f3f0f0'} : null}>Dessert</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Bread')} style={parentState.sideFiltersChild.includes('Bread') ? {background: '#f3f0f0'} : null}>Bread</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Pastry')} style={parentState.sideFiltersChild.includes('Pastry') ? {background: '#f3f0f0'} : null}>Pastry</div>
                  </>
                ) : null}
                <div className='filter-min-item' onClick={() => updateCheckbox('Functional Ingredients')} style={parentState.sideFilters.includes('Functional Ingredients') ? {background: '#f3f0f0'} : null}>Functional Ingredients</div>
                <div className='filter-min-item' onClick={() => updateCheckbox('Pan Release')} style={parentState.sideFilters.includes('Pan Release') ? {background: '#f3f0f0'} : null}>Pan Release</div>
                <div className='filter-min-item' onClick={() => updateCheckbox('Glaze')} style={parentState.sideFilters.includes('Glaze') ? {background: '#f3f0f0'} : null}>Glaze</div>
                <div className='filter-min-item filter-min-parent' onClick={() => updateCheckbox('Flavors')} style={parentState.sideFilters.includes('Flavors') ? {background: '#f3f0f0'} : null}>
                  <p>Flavors</p>
                  <img className='filter-dropdown-arrow' alt='' src={DropdownArrow} style={!parentState.flavorDropDown ? {transform: 'translateY(-3px) rotate(180deg)'} : null} onClick={() => dropdownToggle('flavorDropDown', 'Flavors')} />
                </div>
                {parentState.flavorDropDown ? (
                  <>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Sweet')} style={parentState.sideFiltersChild.includes('Sweet') ? {background: '#f3f0f0'} : null}>Sweet</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Spice')} style={parentState.sideFiltersChild.includes('Spice') ? {background: '#f3f0f0'} : null}>Spice</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Nut')} style={parentState.sideFiltersChild.includes('Nut') ? {background: '#f3f0f0'} : null}>Nut</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Fruit')} style={parentState.sideFiltersChild.includes('Fruit') ? {background: '#f3f0f0'} : null}>Fruit</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Dairy')} style={parentState.sideFiltersChild.includes('Dairy') ? {background: '#f3f0f0'} : null}>Dairy</div>
                    <div className='filter-min-item filter-min-item-child' onClick={() => updateCheckboxChild('Alcohol')} style={parentState.sideFiltersChild.includes('Alcohol') ? {background: '#f3f0f0'} : null}>Alcohol</div>
                  </>
                ) : null}
              </div>
            ) : null}
          </>  
        ) : (
          <div className='filter-toggle-fixed'>
            <div className='filter-title-container'>
              <p className='filter-title'>refine by</p>
              {parentState.sideFilters.length > 0 || parentState.sideFiltersChild.length > 0 ? (
                <div className='filter-clear' onClick={() => removeFilters()}>
                  <p>clear</p>
                </div>     
              ) : null}   
            </div>
            <div className='filter-toggle-dropdown'>
              <span className='filter-checkbox' onClick={() => updateCheckbox('Bakery Mixes', 'bakeryDropDown')}>
                <input type="checkbox" id='checkbox1' checked={parentState.sideFilters.includes('Bakery Mixes') || parentState.bakeryDropDown} />
                <span></span>
                <label htmlFor='checkbox1'>Bakery Mixes</label> 
              </span>
              <img className='filter-dropdown-arrow' alt='' src={DropdownArrow} style={!parentState.bakeryDropDown ? {transform: 'translateY(-3px) rotate(180deg)'} : null} onClick={() => updateCheckbox('Bakery Mixes', 'bakeryDropDown')} />
            </div>
            {parentState.bakeryDropDown ? (
              <div className='filter-toggle-dropdown-contents'>
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Dessert')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Dessert')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Dessert</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Bread')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Bread')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Bread</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Pastry')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Pastry')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Pastry</label> 
                </span>  
              </div>
            ) : null}
            <span className='filter-checkbox' onClick={() => updateCheckbox('Functional Ingredients')}>
              <input type="checkbox" id='checkbox2' checked={parentState.sideFilters.includes('Functional Ingredients')} />
              <span></span>
              <label htmlFor='checkbox2'>Functional Ingredients</label> 
            </span>
            <span className='filter-checkbox' onClick={() => updateCheckbox('Pan Release')}>
              <input type="checkbox" id='checkbox3' checked={parentState.sideFilters.includes('Pan Release')} />
              <span></span>
              <label htmlFor='checkbox3'>Pan Release</label> 
            </span>
            <span className='filter-checkbox' onClick={() => updateCheckbox('Glaze')}>
              <input type="checkbox" id='checkbox4' checked={parentState.sideFilters.includes('Glaze')} />
              <span></span>
              <label htmlFor='checkbox4'>Glaze</label> 
            </span>
            <div className='filter-toggle-dropdown'>
              <span className='filter-checkbox' onClick={() => updateCheckbox('Flavors', 'flavorDropDown')}>
                <input type="checkbox" id='checkbox6' checked={parentState.sideFilters.includes('Flavors') || parentState.flavorDropDown} />
                <span></span>
                <label htmlFor='checkbox6'>Flavors</label> 
              </span>
              <img className='filter-dropdown-arrow' alt='' src={DropdownArrow} style={!parentState.flavorDropDown ? {transform: 'translateY(-3px) rotate(180deg)'} : null} onClick={() => updateCheckbox('Flavors', 'flavorDropDown')} />
            </div>
            {parentState.flavorDropDown ? (
              <div className='filter-toggle-dropdown-contents'>
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Sweet')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Sweet')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Sweet</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Spice')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Spice')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Spice</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Nut')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Nut')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Nut</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Fruit')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Fruit')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Fruit</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Dairy')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Dairy')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Dairy</label> 
                </span>  
                <span className='filter-checkbox-child' onClick={() => updateCheckboxChild('Alcohol')}>
                  <input type="checkbox" id='checkbox2' checked={parentState.sideFiltersChild.includes('Alcohol')} />
                  <span></span>
                  <label htmlFor='checkbox2'>Alcohol</label> 
                </span>   
              </div>
            ) : null}
          </div>
        )}
      </>
    )
  }
}
