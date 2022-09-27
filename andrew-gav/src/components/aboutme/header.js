import React, { Component } from 'react';
import AboutMe from './aboutMe';
import Title from './title';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <AboutMe />
      </React.Fragment>
    )
  }
};

export default Header;