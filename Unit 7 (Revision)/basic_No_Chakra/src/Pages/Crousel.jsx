import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Crousel.css"
export const Crousel = () => {

   var settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      autoplay: true,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
 
      let arr=[1,2,3,4,5,6]

   return (
 <div id='container'>
       <Slider  {...settings}>
        {arr.map((ele)=>{
            return <div className='cart'>
            <img src='data:image/jpeg;base64,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'/>
           </div>
        })}
     
    </Slider>
 </div>
  );
}
