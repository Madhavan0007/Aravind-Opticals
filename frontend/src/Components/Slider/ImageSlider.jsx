import React from 'react'
import Slider from 'react-infinite-logo-slider';
import vincentChase from '../Assets/vincent-chase.png';
import hustlr from '../Assets/hustlr.png';
import aqualens from '../Assets/aqualens.png';
import softlens from '../Assets/softlens.png';
import johnJacobs from '../Assets/john-jacobs.png';
import './ImageSlider.css';
const ImageSlider = () => {
  return (
    <div className="slider">
        <Slider
            width="400px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#000'}
        >
            <Slider.Slide>
                <img src={vincentChase} alt="vincentchase" className="logo-img"/>
            </Slider.Slide>

            <Slider.Slide>
                <img src={hustlr} alt="hustlr" className="logo-img"/>
            </Slider.Slide>

            <Slider.Slide>
                <img src={aqualens} alt="aqualens" className="logo-img"/>
            </Slider.Slide>

            <Slider.Slide>
                <img src={softlens} alt="softlens" className="logo-img"/>
            </Slider.Slide>

            <Slider.Slide>
                <img src={johnJacobs} alt="johnjacobs" className="logo-img"/>
            </Slider.Slide>

        </Slider>
    </div>
  )
}

export default ImageSlider