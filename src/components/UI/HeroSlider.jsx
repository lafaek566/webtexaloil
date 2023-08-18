import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";


const HeroSlider = () => {

    const settings = {
        fade: true,
        speed: 2000,
        autoplayspeed: 3000,
        Infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
  };
  return ( 
  <Slider {...settings} className="hero__slider">
    <div className="slider__item slider__item-01 mt0">
        <Container>
            <div className="slider__content">
                <h1 className="text-bold mb-2">TEXAL OIL</h1>
                <h2 className="text-bold mb-2">PCMO</h2>
                

            <button className="btn reserve__btn mt-1">
                <Link to="/product">Reserve Now</Link>
            </button>
          </div>
        </Container> 
    </div>

        <div className="slider__item slider__item-02 mt0">
        <Container>
            <div className="slider__content">
                <h1 className="text-bold mb-2"> TEXAL OIL</h1>
                <h2 className="text-bold mb-2"> MCO</h2>
                
                

            <button className="btn reserve__btn mt-1">
                <Link to="/product">Reserve Now</Link>
            </button>
        </div>
      </Container>        
     </div>

     <div className="slider__item slider__item-03 mt0">
        <Container>
            <div className="slider__content">
                <h1 className="text-bold mb-2">TEXAL OIL</h1>
                <h2 className="text-bold mb-2"> Other</h2>
                

            <button className="btn reserve__btn  mt-1">
                <Link to="/product">Reserve Now</Link>
            </button>   
        </div>
      </Container>        
     </div>
    </Slider>
  );
};

export default HeroSlider; 