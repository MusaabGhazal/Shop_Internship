const imageSourse = "/first.png";
const vectorImage = "/Vector.png";
const vectorBigImage = "/VectorBig.png";

export default function First() {
  return (
    <div className="first">
      <div className="first-texts">
        <div className="first-title">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
        <div className="first-subtitle">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </div>
        <button className="first-button">Shop Now</button>
        <div className="first-numbers">
          <div className="first-international">
            <div className="first-stats-number">200+</div>
            <div className="first-stats-text">International Brands</div>
          </div>
          <div className="first-border"></div>
          <div className="first-quality">
            <div className="first-stats-number">2,000+</div>
            <div className="first-stats-text">High-Quality Products</div>
          </div>
          <div className="first-border border-2"></div>
          <div className="first-happy">
            <div className="first-stats-number">30,000+</div>
            <div className="first-stats-text">Happy Customers</div>
          </div>
        </div>
      </div>
      <div className="first-images">
        <img className="first-vector" src={vectorImage} alt="vector black" />
        <img className="first-fashion-guys" src={imageSourse} alt="fashion guys"/>
        <img className="first-vector-big" src={vectorBigImage} alt="vector black big"/>
      </div>
    </div>
  );
}
