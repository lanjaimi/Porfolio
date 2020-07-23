import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../Data';
import SingleProject from './SingleProject';

export default class Projects extends Component {
  render() {
    const list = projects.map((project, index) => {
      return <SingleProject key={index} {...project} />;
    });
    return (
      <div className='projects_container '>
        <div className='second_cont container'>
          <h4 onClick={this.props.setDisplay}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </h4>
          <h1>Projects</h1>
          {list}
        </div>
      </div>
    );
  }
}
