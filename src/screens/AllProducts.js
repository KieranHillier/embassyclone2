import React, { Component } from 'react';
import './AllProducts.css';
import { GlobalContext } from '../context/GlobalState';
import ProductsData from '../data/products.json';
import DropdownArrow from '../images/dropdownArrow.svg';
import { ProductCard } from '../components/ProductCard'

export class AllProducts extends Component {
  static contextType = GlobalContext

  state = {
    results: [],
    query: "",
    queryStatus: "initial",
    sideFilters: [],
    bakeryDropDown: false,
    sideFiltersChild: [],
  }

  _findResults = () => {
    //value inside search input
    const query = this.refs.searchValue.value.toLowerCase();
    const { sideFilters, sideFiltersChild } = this.state

    let matchingResults = [...ProductsData];
    console.log(matchingResults)
    const checkQuery = query !== '' ? true : false;
    const checkFilter = sideFilters.length > 0 ? true : false;
    const checkFilterChild = sideFiltersChild.length > 0 ? true : false;

    //check if query is blank
    if (checkQuery) {
      matchingResults = matchingResults.filter(ele => ele.keywords.includes(query))
      console.log('Performed query Check', matchingResults)
    } 

    //check
    if (checkFilter) {
      matchingResults = matchingResults.filter(ele => sideFilters.includes(ele.category1))
      console.log('Performed side filter Check', matchingResults)
    }

    //check
    if (checkFilterChild) {
      matchingResults = matchingResults.filter(ele => sideFiltersChild.includes(ele.category2))
      console.log('Performed side filter child Check', matchingResults)
    }

    // if (sideFiltersChild.length > 0) {
    //   ProductsData.forEach(element => {
    //     const keyWords = element.keywords;
    //     if (keyWords.includes(query) && sideFilters.includes(element.category2)) {
    //       matchingResults.push(element);
    //     }
    //   });
    // } else if (sideFilters.length > 0) {
    //   //find results that match the element's keywords & keyword
    //   ProductsData.forEach(element => {
    //     const keyWords = element.keywords;
    //     if (keyWords.includes(query) && sideFilters.includes(element.category1)) {
    //       matchingResults.push(element);
    //     }
    //   });
    // } else {
    //   //find results that match the element's keywords
    //   ProductsData.forEach(element => {
    //     const keyWords = element.keywords;
    //     if (keyWords.includes(query)) {
    //       matchingResults.push(element);
    //     }
    //   });
    // }

      //check if search produced any results. if successful store results in state. 
      //if unsuccessful store "failed" in state
    matchingResults.length === 0
      ? this.setState({ results: [], queryStatus: "failed" })
      : this.setState({ results: matchingResults, queryStatus: "filtered" });
  };

  _handleKeyPress = e => {
    //check if user presses "Enter" key while focused on input
    //if so, search for results
    if (e.key === "Enter") {
      this._findResults();
    }
  };

  _handleInputChange = e => {
    //track value of input inside 'query' state
    this.setState({ query: e.target.value });
    const { sideFilters, sideFiltersChild } = this.state

    //if input is blank, remove all matches
    if (e.target.value === "" && sideFilters.length === 0 && sideFiltersChild.length === 0) {
      this.setState({
        results: [],
        queryStatus: "initial"
      });
    }
  };

  _onSideFilterClick = e => {
    const { sideFilters } = this.state

    if (e.target.checked) {
      this.setState({sideFilters: [...sideFilters, e.target.value]}, this._findResults)
    } else {
      const arr = [...sideFilters]
      const idx = arr.indexOf(e.target.value)
      if (idx !== -1) {
        arr.splice(idx, 1)
        this.setState({ sideFilters: arr }, this._findResults)
      }
    }
  }

  _renderSideFilters = (filters) => {
    return filters.map((element, idx) => (
      <div>
        <input type='checkbox' id={`checkbox${idx}`} value={element} onChange={(e) => this._onSideFilterClick(e)}/>
        <label for={`checkbox${idx}`}>{element}</label>
      </div>
    ));
  }

  _renderResults = () => {
    const { results, favourites, queryStatus } = this.state;
    
    if (queryStatus === "initial") {
      return ProductsData.map((element, idx) => (
        <ProductCard id={idx} element={element} />
      ));
    } else if (results.length > 0) {
      //loop through "results" and render all results
      return results.map((element, idx) => (
        <ProductCard id={idx} element={element} />
      ));
    }
  };

  _updateCheckbox(val) {
    const { sideFilters } = this.state

    if (!sideFilters.includes(val)) {
      this.setState({sideFilters: [...sideFilters, val]}, this._findResults)
    } else {
      const arr = [...sideFilters]
      const idx = arr.indexOf(val)
      if (idx !== -1) {
        arr.splice(idx, 1)
        this.setState({ sideFilters: arr }, this._findResults)
      }
    }
  }

  _updateCheckboxChild(val) {
    const { sideFiltersChild } = this.state

    if (!sideFiltersChild.includes(val)) {
      this.setState({sideFiltersChild: [...sideFiltersChild, val]}, this._findResults)
    } else {
      const arr = [...sideFiltersChild]
      const idx = arr.indexOf(val)
      if (idx !== -1) {
        arr.splice(idx, 1)
        this.setState({ sideFiltersChild: arr }, this._findResults)
      }
    }
  }

  render() {
    const { results, sideFilters, sideFiltersChild, bakeryDropDown } = this.state
    return (
      <div className='filter-container'>
          <div className='filter-toggle-container'>
            <div className='filter-toggle-fixed'>
              <p className='filter-title'>refine by</p>   
              <div className='filter-toggle-dropdown'>
                <span className='filter-checkbox' onClick={() => this._updateCheckbox('Bakery Mixes')}>
                  <input type="checkbox" id='checkbox1' checked={sideFilters.includes('Bakery Mixes')} />
                  <span></span>
                  <label htmlFor='checkbox1'>Bakery Mixes</label> 
                </span>
                <img classname='filter-dropdown-arrow' src={DropdownArrow} style={!bakeryDropDown ? {transform: 'translateY(-3px) rotate(180deg)'} : null} onClick={() => this.setState({bakeryDropDown: !bakeryDropDown})} />
              </div>
              {bakeryDropDown ? (
                <div className='filter-toggle-dropdown-contents'>
                  <span className='filter-checkbox-child' onClick={() => this._updateCheckboxChild('Dessert')}>
                    <input type="checkbox" id='checkbox2' checked={sideFiltersChild.includes('Dessert')} />
                    <span></span>
                    <label htmlFor='checkbox2'>Dessert</label> 
                  </span>  
                  <span className='filter-checkbox-child' onClick={() => this._updateCheckboxChild('Bread')}>
                    <input type="checkbox" id='checkbox2' checked={sideFiltersChild.includes('Bread')} />
                    <span></span>
                    <label htmlFor='checkbox2'>Bread</label> 
                  </span>  
                  <span className='filter-checkbox-child' onClick={() => this._updateCheckboxChild('Pastry')}>
                    <input type="checkbox" id='checkbox2' checked={sideFiltersChild.includes('Pastry')} />
                    <span></span>
                    <label htmlFor='checkbox2'>Pastry</label> 
                  </span>  
                </div>
              ) : null}
              <span className='filter-checkbox' onClick={() => this._updateCheckbox('Functional Ingredients')}>
                <input type="checkbox" id='checkbox2' checked={sideFilters.includes('Functional Ingredients')} />
                <span></span>
                <label htmlFor='checkbox2'>Functional Ingredients</label> 
              </span>
              <span className='filter-checkbox' onClick={() => this._updateCheckbox('Pan Release')}>
                <input type="checkbox" id='checkbox3' checked={sideFilters.includes('Pan Release')} />
                <span></span>
                <label htmlFor='checkbox3'>Pan Release</label> 
              </span>
              <span className='filter-checkbox' onClick={() => this._updateCheckbox('Glaze')}>
                <input type="checkbox" id='checkbox4' checked={sideFilters.includes('Glaze')} />
                <span></span>
                <label htmlFor='checkbox4'>Glaze</label> 
              </span>
              <span className='filter-checkbox' onClick={() => this._updateCheckbox('Flavors')}>
                <input type="checkbox" id='checkbox5' checked={sideFilters.includes('Flavors')} />
                <span></span>
                <label htmlFor='checkbox5'>Flavors</label> 
              </span>
              <span className='filter-checkbox' onClick={() => this._updateCheckbox('Colors')}>
                <input type="checkbox" id='checkbox6' checked={sideFilters.includes('Colors')} />
                <span></span>
                <label htmlFor='checkbox6'>Colors</label> 
              </span>
            </div>
          </div>  
          <div className='filter-search-container'>
              <div className='filter-searchbar-container'>
                <h1 className='filter-searchbar-title'>Search for an Embassy Ingredients Product</h1>
                <input
                  onKeyPress={this._handleKeyPress}
                  onChange={this._handleInputChange}
                  className="filter-searchbar"
                  type="text"
                  ref="searchValue"
                  placeholder="Search... (ex: Brownie)"
                  name="search"
                  autoComplete="off"
                />
              </div>
              <div className='filter-search-results'>
                {this._renderResults()}
              </div>
          </div>
      </div>
    )
  }
}
