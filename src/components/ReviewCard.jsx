// TODO:
// Make star rendering dynamic

const starImage = "/Star.png";
const verifiedImage = "/verified.png"

export default function ReviewCard({review}){

  return (
    <div className="review-card">
      <div className="rating-stars">
        <img className="star-image" src={starImage} alt="star image" />
        <img className="star-image" src={starImage} alt="star image" />
        <img className="star-image" src={starImage} alt="star image" />
        <img className="star-image" src={starImage} alt="star image" />
        <img className="star-image" src={starImage} alt="star image" />
      </div>
      <div className="rating-customer">
        <p>{review.name}</p>
        { review.isVerified && <img src={verifiedImage} alt="verified" />}
      </div>
      <div className="rating-review">{review.review}</div>
    </div>
  );
}