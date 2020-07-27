import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { social } from '../Data.js';

library.add(faGithub, faLinkedin);

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav_bar'>
        <h1>
          Lahcen <span>Anjaimi</span>
        </h1>

        <div className='menu'>
          <a target='_blank' rel='noopener noreferrer' href={social.github}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a target='_blank' rel='noopener noreferrer' href={social.linkedin}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
      </div>
    );
  }
}
