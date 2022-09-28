import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
`;

class Title extends Component {
  render() {
    return (
      <Container>
        <h1> Andrew Gavegan</h1>
        <h2>Full Stack Web Developer</h2>
      </Container>
    )
  }
};

export default Title;