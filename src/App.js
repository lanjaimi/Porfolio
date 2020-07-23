import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
class App extends Component {
  constructor() {
    super();
    this.showing = false;

    this.projects = React.createRef();
  }

  setDisplay = () => {
    console.log('clicked');
    if (!this.showing) {
      this.projects.current.style.display = 'block';

      setTimeout(() => {
        this.projects.current.style.transform = 'translateY(-100vh)';
      }, 0);
      this.showing = true;
    } else {
      this.projects.current.style.display = 'none';
      this.projects.current.style.transform = 'translateY(100vh)';

      this.showing = false;
    }
  };

  render() {
    console.log('render');
    return (
      <div className='App'>
        <NavBar />
        <div className='body_container'>
          <Home setDisplay={this.setDisplay} />
          <div className='project_ref' ref={this.projects}>
            <Projects setDisplay={this.setDisplay} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
