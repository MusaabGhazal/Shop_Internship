import { useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";

export default function ReviewCenterMode({reviews, ref}){

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slidesToShow = screenSize > 1024 ? 3 : 1;
  const centerMode = screenSize > 1024 ? true : false;
  
  var settings = {
    arrows: false,
    // dots: true,
    className: "center",
    centerMode: centerMode,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: slidesToShow,
    speed: 900,
  };
  
  return (
    <div className="slider-container">
      <Slider ref={ref} {...settings}>
        {reviews.map((review)=> {
          return(
            <ReviewCard key={review.name} review={review}/>
          )
        })}
      </Slider>
    </div>
  );
}