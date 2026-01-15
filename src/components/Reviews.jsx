import ReviewCenterMode from "./ReviewCenterMode";
import { useRef } from "react";

const reviews = [
  {
    rate : 5,
    name : 'Alex K.',
    review: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
    isVerified : true,
  },
  {
    rate : 5,
    name : 'James L.',
    review: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    isVerified : true,
  },
  {
    rate : 5,
    name : 'Mooen',
    review: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    isVerified : true,
  },
  {
    rate : 5,
    name : 'Sarah M.',
    review: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    isVerified : true,
  },
  {
    rate : 5,
    name : 'Sarah M.',
    review: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    isVerified : true,
  },
]

const leftArrowImage = "/leftArrow.png";
const rightArrowImage = "/rightArrow.png";

export default function Reviews(){

  const sliderRef = useRef(null);

  return (
    <>
      <div className="reviews-header"> 
        <span className="reviews-title">OUR HAPPY CUSTOMERS</span>
        <div className="reviews-buttons">
          <button onClick={() => sliderRef.current.slickPrev()}>
            <img src={leftArrowImage} alt="left arrow" />
          </button>  
          <button onClick={() => sliderRef.current.slickNext()}>
            <img src={rightArrowImage} alt="right arrow" />
          </button>  
        </div>  
      </div>
      <ReviewCenterMode reviews={reviews} ref={sliderRef}/>
    </>
  );
}