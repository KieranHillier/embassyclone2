import React, { Component } from 'react'
import DropdownArrow from '../images/dropdownArrow.svg'
import './Distributors.css'
import DistributorsData from '../data/distributors.json'
import DistributorChild from '../components/DistributorChild'
import { Link } from 'react-router-dom'

class Distributors extends Component {
  constructor() {
    super()
    this.state = {
      parents: {
        canada: false,
        usa: false,
        mexico: false,
        central_america: false,
        middle_east_and_asia: false,
      },
      provinces: {
        ontario: false,
        quebec: false,
        western: false,
        atlantic: false,
      },
    }
  }

  _updateParent(parent) {
    const arr = { ...this.state.parents }
    arr[parent] = !arr[parent]
    this.setState({
      parents: arr,
    })
  }

  _updateProvince(province) {
    const arr = { ...this.state.provinces }
    arr[province] = !arr[province]
    this.setState({
      provinces: arr,
    })
  }

  _renderChildren(location) {
    return DistributorsData[location].map((element, idx) => (
      <DistributorChild element={element} key={idx} />
    ))
  }

  render() {
    const { parents, provinces } = this.state
    return (
      <>
        <div className="distributors-container">
          <div className="distributors-header-image"></div>
          <div className="distributors-content-container">
            <div className="distributors-header-text">
              <h1>Distributors</h1>
              <p>
                Embassy Ingredients has customers all over the world and we work
                with some of the largest and most recognized names in the food
                service and food product manufacturing industries. We also serve
                a wide range of bakeries and food processors both direct and
                throughout Distributor and Agents partners.
              </p>
            </div>
            <div className="distributors-data-container">
              <div
                className="distributors-parent"
                onClick={() => this._updateParent('canada')}
              >
                <h2 style={parents.canada ? { color: '#54b846' } : null}>
                  Canada
                </h2>
                <img
                  className="distributors-icon"
                  alt=""
                  src={DropdownArrow}
                  style={
                    !parents.canada
                      ? { transform: 'rotate(90deg)' }
                      : { transform: 'rotate(180deg)' }
                  }
                />
              </div>
              {parents.canada ? (
                <>
                  <div
                    className="distributors-province"
                    onClick={() => this._updateProvince('ontario')}
                  >
                    <h2 style={provinces.ontario ? { color: '#54b846' } : null}>
                      Ontario
                    </h2>
                    <img
                      className="distributors-icon"
                      alt=""
                      src={DropdownArrow}
                      style={
                        !provinces.ontario
                          ? { transform: 'rotate(90deg)' }
                          : { transform: 'rotate(180deg)' }
                      }
                    />
                  </div>
                  {provinces.ontario ? this._renderChildren('ontario') : null}
                  <div
                    className="distributors-province"
                    onClick={() => this._updateProvince('quebec')}
                  >
                    <h2 style={provinces.quebec ? { color: '#54b846' } : null}>
                      Quebec
                    </h2>
                    <img
                      className="distributors-icon"
                      alt=""
                      src={DropdownArrow}
                      style={
                        !provinces.quebec
                          ? { transform: 'rotate(90deg)' }
                          : { transform: 'rotate(180deg)' }
                      }
                    />
                  </div>
                  {provinces.quebec ? this._renderChildren('quebec') : null}
                  <div
                    className="distributors-province"
                    onClick={() => this._updateProvince('western')}
                  >
                    <h2 style={provinces.western ? { color: '#54b846' } : null}>
                      Western Canada
                    </h2>
                    <img
                      className="distributors-icon"
                      alt=""
                      src={DropdownArrow}
                      style={
                        !provinces.western
                          ? { transform: 'rotate(90deg)' }
                          : { transform: 'rotate(180deg)' }
                      }
                    />
                  </div>
                  {provinces.western ? this._renderChildren('western') : null}
                </>
              ) : null}
              <div className="distributors-empty-container">
                <div
                  className="distributors-empty"
                  onClick={() => this._updateParent('usa')}
                >
                  <h2 style={parents.usa ? { color: '#54b846' } : null}>
                    United States of America
                  </h2>
                  <img
                    className="distributors-icon"
                    alt=""
                    src={DropdownArrow}
                    style={
                      !parents.usa
                        ? { transform: 'rotate(90deg)' }
                        : { transform: 'rotate(180deg)' }
                    }
                  />
                </div>
                {parents.usa ? (
                  <div className="distributors-empty-text">
                    <h3>Want to work with Embassy in the United States?</h3>
                    <p>
                      If you are interested in using Embassy Ingredients for
                      your business in the U.S., please contact us directly and
                      find out more information about the industries we serve,
                      our products, finished concepts, and terms of sale.
                    </p>
                    <div className="distributors-empty-btn">
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="distributors-empty-container">
                <div
                  className="distributors-empty"
                  onClick={() => this._updateParent('mexico')}
                >
                  <h2 style={parents.mexico ? { color: '#54b846' } : null}>
                    Mexico
                  </h2>
                  <img
                    className="distributors-icon"
                    alt=""
                    src={DropdownArrow}
                    style={
                      !parents.mexico
                        ? { transform: 'rotate(90deg)' }
                        : { transform: 'rotate(180deg)' }
                    }
                  />
                </div>
                {parents.mexico ? (
                  <div className="distributors-empty-text">
                    <h3>Want to work with Embassy in Mexico?</h3>
                    <p>
                      If you are interested in using Embassy Ingredients for
                      your business in Mexico, please contact us directly and
                      find out more information about the industries we serve,
                      our products, finished concepts, and terms of sale.
                    </p>
                    <div className="distributors-empty-btn">
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </div>
                ) : null}
              </div>
              <div
                className="distributors-parent"
                onClick={() => this._updateParent('central_america')}
              >
                <h2
                  style={parents.central_america ? { color: '#54b846' } : null}
                >
                  Central America
                </h2>
                <img
                  className="distributors-icon"
                  alt=""
                  src={DropdownArrow}
                  style={
                    !parents.central_america
                      ? { transform: 'rotate(90deg)' }
                      : { transform: 'rotate(180deg)' }
                  }
                />
              </div>
              {parents.central_america
                ? this._renderChildren('central_america')
                : null}
              <div className="distributors-empty-container">
                <div
                  className="distributors-empty"
                  onClick={() => this._updateParent('middle_east_and_asia')}
                >
                  <h2
                    style={
                      parents.middle_east_and_asia ? { color: '#54b846' } : null
                    }
                  >
                    Middle East & South East Asia
                  </h2>
                  <img
                    className="distributors-icon"
                    alt=""
                    src={DropdownArrow}
                    style={
                      !parents.middle_east_and_asia
                        ? { transform: 'rotate(90deg)' }
                        : { transform: 'rotate(180deg)' }
                    }
                  />
                </div>
                {parents.middle_east_and_asia ? (
                  <div className="distributors-empty-text">
                    <h3>
                      Want to work with Embassy in the Middle East & South East
                      Asia?
                    </h3>
                    <p>
                      If you are interested in using Embassy Ingredients for
                      your business in the Middle East & South East Asia, please
                      contact us directly and find out more information about
                      the industries we serve, our products, finished concepts,
                      and terms of sale.
                    </p>
                    <div className="distributors-empty-btn">
                      <Link to="/contact">Contact Us</Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="distributors-bottom-container">
          <div className="distributors-content">
            <p>
              If you are interested in using Embassy Ingredients for your
              business, please contact us for more information about the
              industries we serve, our products, finished concepts, and terms of
              sale.
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Distributors
