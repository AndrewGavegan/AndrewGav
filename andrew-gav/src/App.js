import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import { createGlobalStyle } from 'styled-components';
import Header from '../src/components/aboutme/header'
import './App.css';

const MainStyle = createGlobalStyle
  `html, body { margin: 0;}*, *:before, *:after { box-sizing: border-box; }`;

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Header />
        </MediaQuery>
        <MainStyle />
      </React.Fragment>
    );
  }
}

export default App;