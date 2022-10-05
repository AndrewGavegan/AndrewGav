import React from 'react'
import './App.css';
import { useInView } from 'react-intersection-observer';

export default function App() {
  const { ref: aboutRef, inView: aboutSlide } = useInView()
  const { ref: nameRef, inView: nameSlide } = useInView()
  const { ref: descRef, inView: descSlide } = useInView()
  const { ref: meRef, inView: meSlide } = useInView()


  return (
    <div className="Page">
      <div className="Container">
        <h1 className="nameH1" ref={nameRef}>
          <span className={`${'nameOff'} ${nameSlide ? 'nameOn' : ''}`}>Andrew Gavegan</span>
        </h1>
        <h2 className="descH1" ref={descRef}>
          <span className={`${'descOff'} ${descSlide ? 'descOn' : ''}`}>Full Stack Web Developer</span>
        </h2>
      </div>
      <div className="Container">
        <h1 className="aboutH1" ref={aboutRef} >
          <span className={`${'aboutOff'} ${aboutSlide ? 'aboutOn' : ''}`}>ABOUT ME</span>
        </h1>
        <p className="meP" ref={meRef} >
          <span className={`${'meOff'} ${meSlide ? 'meOn' : ''}`}>Full stack developer who thrives working in a diverse team. <br />
            Determined to always be learning and coding and learning and coding.</span>
        </p>
      </div>
      <div className="Container">
        <h1>PROJECTS</h1>
      </div>
    </div>
  );
};