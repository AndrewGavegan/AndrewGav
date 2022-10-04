import React, { Component } from 'react';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <h1>ABOUT ME</h1>
        <p>
          Full stack developer who thrives working in a diverse team.
          Determined to always be learning and coding and learning and coding.
        </p>
      </Container>
    )
  }
};

export default AboutMe;