import React, {useEffect, useState, useRef} from 'react'
import * as THREE from 'three';
import "animate.css";
import "./index.css";
import GLOBE from 'vanta/dist/vanta.globe.min'

function SailplaneLanding () {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: vantaRef.current,
        scale: 0.50,
        scaleMobile: 0.20,
        color: 0x0000ff,
        color2: 0xff0000,
        backgroundColor: 0xffffff,
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <div className='animated fadeIn slow landing-background' ref={vantaRef}>
      <div className='landing-container'>
        <div className='landing-title-container'>
          <h1>Sailplane</h1>
          <h3>Decentralized file sharing</h3>
        </div>
        <button className='landing-launch-button animated infinite pulse slower'>Launch App</button>
        <div className='landing-footer-container'>
          <div className='landing-footer-title'>What is this?</div>
          <div className="animated infinite bounce slower">V</div>
        </div>
      </div>
    </div>
  )
}

export default SailplaneLanding
