import React, { Component } from 'react';
import LeadershipData from '../data/leadershipTeam.json';
import './Leadership.css';

const LeadershipCard = (props) => (
  <div className='leadership-card-container' onClick={() => props.openModal(props.data)}>
    <div className='leadership-card-img-container'>
      <div className='leadership-card-img' />
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
      <LeadershipCard data={element} id={idx} openModal={this._openModal}/>
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
          <div className='leadership-team-container'>
            {this._renderLeadershipTeam()}
          </div>
        </div>
      </>
    );
  }
}

export default Leadership;