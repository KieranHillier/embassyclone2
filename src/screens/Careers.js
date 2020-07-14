import React, { Component } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Careers.css'

const careerProfiles = [
  require('../images/career/career-profile1.png'),
  require('../images/career/career-profile2.png'),
  require('../images/career/career-profile3.png')
];
class Careers extends Component {
  static contextType = GlobalContext

  render() {
    const { dimensions, mediaQuery } = this.context
    return (
      <div className='career-container'>
        <div className='career-header-image'>
          <div className='career-header-container'>
            <h1>Are We the Bread to Your Butter?</h1>
            <div className='career-header-btn'>
              <a href="https://www.linkedin.com/company/embassyingredients/jobs/" target="_blank" rel="noopener noreferrer">join our team</a>
            </div>
          </div>
        </div>
        <div className='career-middle-container'>
          <h2 className='career-values-pretitle'>our values</h2>
          <h1 className='career-values-title'>The Secret Ingredients to our Company</h1>
          {dimensions.width >= mediaQuery.desktop ? (
            <div className='career-values-container'>
              <div className='career-values-left'>
                <div className='career-values-top-child1'>
                  <div className='career-values-item-overlay'>
                    <div className='career-values-item-text'>
                      <h3>always deliver s'more</h3>
                      <p>Be creative and deliver solutions that exceed expectations</p>
                    </div>
                  </div>
                </div>
                <div className='career-values-bottom-child1'>
                  <div className='career-values-item-overlay'>
                    <div className='career-values-item-text'>
                      <h3>work together like cookies &amp; cream</h3>
                      <p>Think critically and constuctively as a team player</p>
                    </div>
                  </div>                  
                </div>
              </div>
              <div className='career-values-right'>
                <div className='career-values-top-child2'>
                  <div className='career-values-top-child2-left'>
                    <div className='career-values-item-overlay'>
                      <div className='career-values-item-text'>
                        <h3>put the passion in passionfruit</h3>
                        <p>Be excited to challenge yourself and inspire those around you</p>
                      </div>
                    </div>
                  </div>
                  <div className='career-values-bottom-child2-right'>
                    <div className='career-values-item-overlay'>
                      <div className='career-values-item-text'>
                        <h3>just worry about the calories</h3>
                        <p>Ensure a safe environment with every move</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='career-values-bottom-child2'>
                  <div className='career-values-item-overlay'>
                    <div className='career-values-item-text'>
                      <h3>own the way you roll</h3>
                      <p>Turn ideas into actions and failures into opportunities - take responsibility</p>
                    </div>
                  </div>
                </div>             
              </div>
            </div>
          ) : (
            <div className='career-values-container-min'>
              <div className='career-values-item'>
               <div className='career-values-item-overlay'>
                  <div className='career-values-item-text'>
                    <h3>always deliver s'more</h3>
                    <p>Be creative and deliver solutions that exceed expectations</p>
                  </div>
                </div>  
              </div>
              <div className='career-values-item'>
                <div className='career-values-item-overlay'>
                  <div className='career-values-item-text'>
                    <h3>work together like cookies &amp; cream</h3>
                    <p>Think critically and constuctively as a team player</p>
                  </div>
                </div>
              </div>
              <div className='career-values-item'>
                <div className='career-values-item-overlay'>
                  <div className='career-values-item-text'>
                    <h3>put the passion in passionfruit</h3>
                    <p>Be excited to challenge yourself and inspire those around you</p>
                  </div>
                </div>
              </div>
              <div className='career-values-item'>
                <div className='career-values-item-overlay'>
                  <div className='career-values-item-text'>
                    <h3>just worry about the calories</h3>
                    <p>Ensure a safe environment with every move</p>
                  </div>
                </div>
              </div>
              <div className='career-values-item'>
                <div className='career-values-item-overlay'>
                  <div className='career-values-item-text'>
                    <h3>own the way you roll</h3>
                    <p>Turn ideas into actions and failures into opportunities - take responsibility</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='career-perks-container'>
            <h1>Perks &amp; Benefits</h1>
            <div className='career-perks-icons'>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Competitive Wages</p>
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Culture of Learning</p> 
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Dynamic Work Environment</p>
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Health &amp; Dental Benefits</p>
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>RRSP Matching</p>
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Company Functions</p>
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Bakery Treats Galore</p>
              </div>
              <div className='career-perk-icon'>
                <div className='career-icon'></div>
                <p>Life Insurance Plans</p>
              </div>
            </div>
          </div>
          <div className='career-reference-container'>
            <h1>A Taste of the Embassy Environment</h1>
            <div className='career-reference-cards'>
              <div className='career-reference-card'>
                <div className='career-reference-image'>
                  <div className='career-reference-circle-image' style={{backgroundImage: `url(${careerProfiles[0]})`}}/>
                </div>
                <p className='career-reference-text'>
                  “The culture at Embassy is fun, innovative and hard-working! We wear every “hat” to get the job done.”
                </p>
              </div>
              {dimensions.width >= mediaQuery.tablet ? (
                <div className='career-reference-card'>
                  <div className='career-reference-image'>
                    <div className='career-reference-circle-image' style={{backgroundImage: `url(${careerProfiles[1]})`}}/>
                  </div>
                  <p className='career-reference-text'>
                    “When you need help with a project everyone is always happy to jump in and offer support.”
                  </p>
                </div>
              ) : null}
              {dimensions.width >= (mediaQuery.desktop + 40) ? (
                <div className='career-reference-card'>
                  <div className='career-reference-image'>
                    <div className='career-reference-circle-image' style={{backgroundImage: `url(${careerProfiles[2]})`}}/>
                  </div>
                  <p className='career-reference-text'>
                    “I love that I get the opportunity to grow my skill set at Embassy. Plus, who wouldn’t love to eat tasty treats all day?!”
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Careers;