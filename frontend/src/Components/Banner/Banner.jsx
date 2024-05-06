import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../Assets/banner1.jpg';
import optical1 from '../Assets/optical1.jpg';
import optical2 from '../Assets/optical2.jpg';
import optical3 from '../Assets/optical3.jpg';
// import banner2 from '../Assets/banner2.jpg';
// import banner3 from '../Assets/banner3.jpg';
// import banner4 from '../Assets/banner4.jpg';
// import banner5 from '../Assets/banner5.jpg';
import './Banner.css';

function Banner() {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <img src={banner1} alt="" className="images" />
        </div>
        <div>
            <img src={optical1} alt="" className="images"/>
        </div>
        <div>
            <img src={optical2} alt="" className="images"/>
        </div>
        <div>
            <img src={optical3} alt="" className="images"/>
        </div>
        {/* <div>
            <img src={banner5} alt="" className="images"/>
        </div> */}
      </Slider>
    </div>
  );
}

export default Banner;
