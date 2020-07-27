import React, { Component } from 'react';
import me from '../mypics/head1.jpg';

import { typingText } from '../Data.js';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      main: '',
      secondary: '',
      forward: true,
      speed: 300,
    };
  }

  typingEffects = (text) => {
    console.log('called');
    let k = 0;
    let i = 0;
    let j = 1;

    setInterval(() => {
      this.setState({
        main: text[k][0],
      });
      this.setState({
        secondary: text[k][1][i].substring(0, j),
      });

      if (this.state.forward) j++;
      if (j > text[k][1][i].length)
        this.setState({
          forward: false,
        });

      if (!this.state.forward) {
        j--;
      }

      if (j === -1) {
        j = 1;
        i++;
        this.setState({
          secondary: '',
          forward: true,
        });
      }
      if (i === text[k][1].length) {
        i = 0;
        k++;
      }
      if (k === text.length) k = 0;
    }, 200);
  };

  componentDidMount() {
    this.typingEffects(typingText);
  }

  render() {
    return (
      <div className='home'>
        <div className='home_container'>
          <img className='my_pic' src={me} alt='me' />
          <div className='box'>
            <h1>
              {this.state.main + ' '}
              <span>{this.state.secondary}</span>
            </h1>
          </div>
          <div className='text'>
            <h2> bellow is a sample of my work</h2>
            <h3 onClick={this.props.setDisplay}>click me!</h3>
          </div>
        </div>
      </div>
    );
  }
}
