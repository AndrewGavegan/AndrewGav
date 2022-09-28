import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoints from '../../breakpoints/breakpoints';

const Container = styled.section
  `height: 40vh;
width:100%;
border: 1px solid blue;
position: relative;
overflow: hidden;`;

const AboutMeHeader = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 5.5}%)`,
  }),
})`transition: transform 0.5s ease-out;
font-family: 'AvenirHeavy';
position: absolute;
color: #EEE;
top:5%;
left:-15%;
@media ${breakpoints.M} {
  font-size: 180px;
}
@media ${breakpoints.L} {
  font-size: 200px;
}
@media ${breakpoints.XL} {
  font-size: 350px;
}`;

const AboutMeText = styled.div`
align-items: center;
  font-family: 'Helvetica';
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  @media ${breakpoints.M} {
    transform: translateY(90%);
    font-size: 30px;
  }
  @media ${breakpoints.L} {
    transform: translateY(87%);
    font-size: 38px;
  }
  @media ${breakpoints.XL} {
    transform: translateY(80%);
    font-size: 70px;
  }
`;

class AboutMe extends Component {
  constructor(props) {
    // must call super(props) before anything else otherwise props is undefined 
    super(props);
    this.state = { scrollPercent: 0, };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }



  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <AboutMeHeader scrollPercent={scrollPercent}>ABOUT ME</AboutMeHeader>
        <AboutMeText>
          Full stack developer who thrives working in a diverse team.
          Determined to always be learning and coding and learning and coding.
        </AboutMeText>
      </Container>
    )
  }
};

export default AboutMe;