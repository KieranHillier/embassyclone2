import React, { Component } from 'react';
import LeadershipData from '../data/leadershipTeam.json';
import './Leadership.css';

const ceoData =   {
  "name": "Martino Brambilla",
  "position": "Founder & President",
  "favouriteTreat": "Donuts",
  "description": "Martino Brambilla is the founder, and president of Embassy Ingredients since 1981.\n\nMartino sets the company strategy to specialize in both flavours and bakery ingredients in order to create an industry with healthier, tastier, and more flavourful foods.\n\nMartino graduated from both Harvard Business School and London Business School.",
  "img": require(`../images/leadership/Martino Brambilla.png`)
}

// const leadershipPics = {
//   'Martino Brambilla': require("../images/products/filters/plant-based-logo.png"),
//   'Virginia Chan': require("../images/products/filters/clean-label-logo.png"),
//   'Gwynne Sitsker': require("../images/products/filters/gluten-free-logo.png"),
//   'Hagop Tozak': require("../images/products/filters/gluten-free-logo.png"),
//   'Angel Wong': require("../images/products/filters/gluten-free-logo.png"),
//   'Jonathon York': require("../images/products/filters/gluten-free-logo.png"),
//   'Vittoria Garisto': require("../images/products/filters/gluten-free-logo.png"),
// }

let leadershipImages = {}
LeadershipData.forEach((ele) => {
  leadershipImages[ele.name] = require(`../images/leadership/${ele.name}.png`)
})

const LeadershipCard = (props) => (
  <div className='leadership-card-container' onClick={() => props.openModal(props.data)}>
    <div className='leadership-card-img-container'>
      <img className='leadership-card-img' alt='leadership-img' src={props.img} />
    </div>
    <div className='leadership-card-text-container'>
      <h3>{props.data.name}</h3>
      <p>{props.data.position}</p>
    </div>
  </div>
)

class Leadership extends Component {

  constructor() {
    super()
    this.state = {
      modalOpen: false,
      modalData: null
    }

    this._openModal = this._openModal.bind(this)
  }

  _renderLeadershipTeam = () => {
    return LeadershipData.map((element, idx) => (
      <LeadershipCard data={element} id={idx} img={leadershipImages[element.name]} openModal={this._openModal}/>
    ))
  }

  _openModal(ele) {
    document.body.style.overflow = "hidden"
    this.setState({
      modalOpen: true,
      modalData: ele
    })
  }

  _closeModal() {
    document.body.style.overflow = "unset"
    this.setState({
      modalOpen: false,
      modalData: null
    })
  }

  render() {
    const { modalOpen, modalData } = this.state
    return (
      <>
        {modalOpen ? (
          <div className='leadership-modal-container' onClick={() => this._closeModal()}>
            <div className='leadership-modal'>
              <div className='leadership-close-modal' onClick={() => this._closeModal()}></div>
              <h2>{modalData.name}</h2>
              <h3>{modalData.position}</h3>
              <p>{modalData.description}</p>
              <p style={{fontWeight: '600'}}>Favourite Bakery Treat: <span style={{fontWeight: '100'}}>{modalData.favouriteTreat}</span></p>
            </div>
          </div>
        ) : null}
        <div className='leadership-container'>
          <div className='leadership-header-image'></div>
          <div className='leadership-content-container'>
            <h1 className='leadership-header-text'>Meet Our Leadership Team</h1>
            <div className='leadership-ceo-container'>
              <div className='leadership-card-container' onClick={() => this._openModal(ceoData)}>
                <div className='leadership-card-img-container'>
                  <img className='leadership-card-img' alt='leadership-img' src={ceoData.img} />
                </div>
                <div className='leadership-card-text-container'>
                  <h3>{ceoData.name}</h3>
                  <p>{ceoData.position}</p>
                </div>
              </div>
            </div>
            <div className='leadership-team-container'>
              {this._renderLeadershipTeam()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Leadership;