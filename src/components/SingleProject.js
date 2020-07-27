import React, { Component } from 'react';
import parse from 'html-react-parser';

export default class SingleProject extends Component {
  render() {
    const images = this.props.technologies.map((imgSrc, index) => {
      return <img key={index} src={imgSrc} alt={`'${imgSrc}'`} />;
    });

    return (
      <div className='project row'>
        <div className='col-7'>
          <h2>{this.props.title}</h2>
          <label>Descreption:</label>
          <p>{parse(this.props.description)}</p>
          <div className='technologies'>
            <label>Technologies used:</label>
            {images}
          </div>
        </div>
        <div className='col-5'>
          <div className='links'>
            <img src={this.props.image} alt='project' />
            <a
              href={this.props.source}
              target='_blank'
              rel='noopener noreferrer'
              className='source'
            >
              Source Code
            </a>
            <a
              href={this.props.demo}
              className='demo'
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    );
  }
}
