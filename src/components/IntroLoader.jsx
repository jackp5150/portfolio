import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/loading.json'
import './loading-animation.css'

const LoadingAnimation = () => {
    const [animationSpeed, setAnimationSpeed] = useState(1);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
      };
    
      useEffect(() => {
        setAnimationSpeed(2.5); // set the speed to 1.5x
      }, []);

      return (
        <div className="loading-overlay">
          <div className="loading-container">
            <Lottie 
              options={defaultOptions}
              height={300}
              width={300}
              speed={2}
            />
          </div>
        </div>
      );
      

}
export default LoadingAnimation;
