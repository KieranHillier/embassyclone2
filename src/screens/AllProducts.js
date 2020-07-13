import React, { Component } from 'react';
import './AllProducts.css';
import { GlobalContext } from '../context/GlobalState';
import ProductsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard'
import { ProductFilter } from '../components/ProductFilter'

export class AllProducts extends Component {
  static contextType = GlobalContext

  constructor() {
    super()
    this.mediaQuery = {
      desktop: 992,
      tablet: 800,
      phone: 576,
    }

    this.state = {
      results: [],
      sideFilters: [],
      sideFiltersChild: [],
      query: "",
      queryStatus: "initial",
      bakeryDropDown: false,
      flavorDropDown: false,
      modalOpen: false,
      modalDescription: null,
      modalFeatures: null,
    }

    this._openModal = this._openModal.bind(this)
    this._removeFilters = this._removeFilters.bind(this)
    this._updateCheckbox = this._updateCheckbox.bind(this)
    this._dropdownToggle = this._dropdownToggle.bind(this)
    this._updateCheckboxChild = this._updateCheckboxChild.bind(this)
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
      //console.log('Performed query Check', matchingResults)
    } 

    //check
    if (checkFilter) {
      matchingResults = matchingResults.filter(ele => sideFilters.includes(ele.category1))
      //console.log('Performed side filter Check', matchingResults)
    }

    //check
    if (checkFilterChild) {
      matchingResults = matchingResults.filter(ele => sideFiltersChild.includes(ele.category2))
      //console.log('Performed side filter child Check', matchingResults)
    }

    //check if search produced any results. if successful store results in state. 
    //if unsuccessful store "failed" in state
    matchingResults.length === 0
      ? this.setState({ results: [], queryStatus: "failed" })
      : this.setState({ results: matchingResults, queryStatus: "filtered" });
  };

  // _handleKeyPress = e => {
  //   //check if user presses "Enter" key while focused on input
  //   //if so, search for results
  //     console.log('changed')
  //     this._findResults();

  // };

  _handleInputChange = e => {
    //track value of input inside 'query' state
    this.setState({ query: e.target.value });
    const { sideFilters, sideFiltersChild } = this.state
    console.log('changed')
    //if input is blank, remove all matches
    if (e.target.value === "" && sideFilters.length === 0 && sideFiltersChild.length === 0) {
      this.setState({
        results: [],
        queryStatus: "initial"
      });
    } else {
      this._findResults()
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
    const { results, queryStatus } = this.state;
    
    if (queryStatus === "initial") {
      return ProductsData.map((element, idx) => (
        <ProductCard id={idx} element={element} openModal={this._openModal} />
      ));
    } else if (results.length > 0) {
      //loop through "results" and render all results
      return results.map((element, idx) => (
        <ProductCard id={idx} element={element} openModal={this._openModal} />
      ));
    }
  };

  _updateCheckbox(val) {
    const { sideFilters } = this.state

    //toggle the targeted checkbox
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

  _removeFilters() {
    this.setState({
      sideFilters: [],
      sideFiltersChild: [],
      flavorDropDown: false,
      bakeryDropDown: false
    }, this._findResults)
  }

  _dropdownToggle(category, name) {
    const { bakeryDropDown, sideFiltersChild, flavorDropDown, sideFilters} = this.state
    this.setState({ [category]: !this.state[category] })

    //check if Bakery Mixes dropdown needs to reset
    if (name === 'Bakery Mixes' && bakeryDropDown) {
      const arr = [...sideFiltersChild]
      const bakeryChildren = ['Dessert', 'Bread', 'Pastry']
      const filteredResults = arr.filter(ele => !bakeryChildren.includes(ele))
      this.setState({ 
        bakeryDropDown: !bakeryDropDown,
        sideFiltersChild: filteredResults
      })
    }

    //check if Flavors dropdown needs to reset
    if (name === 'Flavors' && flavorDropDown) {
      const arr = [...sideFiltersChild]
      const flavorChildren = ['Sweet', 'Spice', 'Nut', 'Fruit', 'Dairy', 'Alcohol', 'Savoury', 'Functional']
      const filteredResults = arr.filter(ele => !flavorChildren.includes(ele))
      this.setState({ 
        flavorDropDown: !flavorDropDown,
        sideFiltersChild: filteredResults
      })
    }

    if (!sideFilters.includes('Bakery Mixes') || !sideFilters.includes('Flavors')) {
      this._updateCheckbox(name)
    }
  }

  _closeModal() {
    this.setState({ 
      modalOpen: false,
      modalDescription: null,
      modalFeatures: null
    })
    document.body.style.overflow = "unset"
  }

  _openModal(ele) {
    console.log(ele)
    document.body.style.overflow = "hidden"
    this.setState({
      modalOpen: true,
      modalDescription: ele.description,
      modalFeatures: ele.features
    })
  }
 
  render() {
    const { modalDescription, modalFeatures, modalOpen } = this.state
    const { dimensions, mediaQuery } = this.context
    return (
      <>
        {modalOpen ? (
            <div className='modal-container' onClick={() => this._closeModal()}>
            <div className='modal'>
              <div className='close-modal' onClick={() => this._closeModal()}></div>
              <h2>Description</h2>
              <p>{modalDescription}</p>
              <h2>Features</h2>
              <p>{modalFeatures}</p>
            </div>
          </div>
        ) : null}
        <div className='filter-container'>
          <div className='filter-toggle-container'>
            {dimensions.width >= mediaQuery.desktop ? (
              <ProductFilter 
                removeFilters = {this._removeFilters}
                dropdownToggle = {this._dropdownToggle}
                updateCheckboxChild = {this._updateCheckboxChild}
                updateCheckbox = {this._updateCheckbox}
                parentState = {this.state}
              />
            ) : null}
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
                placeholder="Enter a product name"
                name="search"
                autoComplete="off"
              />
              {dimensions.width < mediaQuery.desktop ? (
                <ProductFilter 
                  removeFilters = {this._removeFilters}
                  dropdownToggle = {this._dropdownToggle}
                  updateCheckboxChild = {this._updateCheckboxChild}
                  updateCheckbox = {this._updateCheckbox}
                  parentState = {this.state}
                />
              ) : null}
            </div>
            <div className='filter-search-results'>
              {this._renderResults()}
            </div>
          </div>
        </div>
      </>
    )
  }
}