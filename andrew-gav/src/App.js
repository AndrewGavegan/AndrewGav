import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components';
import Header from '../src/components/aboutme/header'
import './App.css';

const MainStyle = createGlobalStyle
  `html, body { margin: 0;}*, *:before, *:after { box-sizing: border-box; }`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainStyle />
      </React.Fragment>
    );
  }
}

export default App;