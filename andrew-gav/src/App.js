import React from 'react'
import './App.css';
import { useInView } from 'react-intersection-observer';

export default function App() {
  const { ref: myRef, inView: OnScreen } = useInView()

  // const myRef = useRef();
  // const [OnScreen, setOnScreen] = useState();
  // console.log('OnScreen', OnScreen);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setOnScreen(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  return (
    <div className="Page">
      <div className="Container">
        <h1>Andrew Gavegan</h1>
        <h2 ref={myRef}>Full Stack Web Developer</h2>
      </div>
      <div className="Container">
        <h1>{OnScreen ? 'Nothing' : 'ABOUT ME'}</h1>
        <p>
          Full stack developer who thrives working in a diverse team.
          Determined to always be learning and coding and learning and coding.
        </p>
      </div>
      <div className="Container">
        <h1>PROJECTS</h1>
      </div>
    </div>
  );
};