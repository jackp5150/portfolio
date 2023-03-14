import {HashRouter as Router} from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React, { useState, useEffect} from 'react';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import LoadingAnimation from "./components/IntroLoader";
import Lottie from 'react-lottie'
import animationData from './lotties/loading.json'
import SocialIcon from "./components/SocialIcons";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        {loading ? <LoadingAnimation /> : (
          <h1>
            {/* <SocialIcon /> */}
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Education/>
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </h1>
        )}
      </div>
     </Router>
  );
}

export default App;
