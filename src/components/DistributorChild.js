import React, { Component } from 'react';
import './DistributorChild.css';
import DropdownArrow from '../images/dropdownArrow.svg';

export default class DistributorChild extends Component {

    state = {
        opened: false
    }
    
    render() {
        const { element } = this.props
        const { opened } = this.state
        return (
            <div className='distributors-child-container'>
                <div className='distributors-child-header' onClick={() => this.setState({ opened: !opened })}>
                    <h2 style={opened ? {color: '#54b846'} : null}>{element.title}</h2>
                    <img className='distributors-icon' alt='' src={DropdownArrow} style={!opened ? {transform: 'rotate(90deg)'} : {transform: 'rotate(180deg)'}} />
                </div>
                { opened ? (
                    <div className='distributors-child-body'>
                        <p>{element.address}</p>
                        <p>{element.number}</p>
                        {element.fax ? <p>{element.fax}</p> : null}
                        {element.toll ? <p>{element.toll}</p> : null}
                        {element.email ? <p>{element.email}</p> : null}
                        {element.website ? <a href={`https://${element.website}`} target='_blank' rel='noopener noreferrer'>{element.website}</a> : null}                    
                    </div>
                ) : null}
            </div>
        )
    }
}
