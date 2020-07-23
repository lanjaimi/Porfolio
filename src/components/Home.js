import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';
import me from '../images/me.jpg';

import { typingText } from '../Data.js';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      main: '',
      forward: true,
    };
  }

  typingEffects = (text) => {
    let i = 0;
    let j = 1;

    setInterval(() => {
      this.setState({
        main: text[i].substring(0, j),
      });

      if (this.state.forward) j++;
      if (j === text[i].length)
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
          main: '',
          forward: true,
        });
      }
      if (i === text.length) i = 0;
    }, 500);
  };

  componentDidMount() {
    this.typingEffects(typingText);
  }

  render() {
    return (
      <div className='home'>
        <div className='home_container'>
          <img className='my_pic' src={me} alt='mu picture' />
          <div className='box'>
            <h1>
              programming is <span>{this.state.main}</span>
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
