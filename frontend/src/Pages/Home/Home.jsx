import React, { useEffect } from 'react'
// import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import ImageSlider from '../../Components/Slider/ImageSlider';
import shop1 from '../../Components/Assets/shop1.png';
import shop2 from '../../Components/Assets/shop2.png';
import shop3 from '../../Components/Assets/shop3.png';
import shop4 from '../../Components/Assets/shop4.png';
import shop5 from '../../Components/Assets/shop5.png';
import './Home.css';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        {/* <Hero 
            title="NEW ARRIVALS ONLY" 
            p1="new" 
            p2="collections" 
            p3="for everyone"
            isHome="true"
        /> */}
        <Banner />
        <div className="center-container">
            <div className="logo">
                <p className='title'>OUR BRANDS</p>
                <ImageSlider />
            </div>

            <div className="gallery">
                <p className='title'>GALLERY</p>
                <div className="gallery-img">
                    <img src={shop1} alt="shop1" />
                    <img src={shop2} alt="shop2" />
                    <img src={shop3} alt="shop3" />
                    <img src={shop4} alt="shop4" />
                    <img src={shop5} alt="shop5" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home