const starImage = "/full-star.png";
const halfStarImage = "/half-star.png";

export default function Item({ item }) {
  
  if (item.rate>5){
    item.rate = 5;
  }
  
  return (
    item && (
      <div className="item">
        <div className="item-image">
          <img src={item.itemImagePath} alt="" />
        </div>
        <div className="item-name">{item.item}</div>
        <div className="item-rate">
          <div className="item-rate-stars">
            {Array.from({ length: item.rate }).map((_, index) => (
              <img key={index} src={starImage} alt={`Image ${index + 1}`} />
            ))}
            {item.rate % 1 !== 0 && (
              <img src={halfStarImage} alt="half star"></img>
            )}
          </div>
          <div className="item-rate-numerical">{item.rate}/5</div>
        </div>
        <div className="item-price">
          {!(item.discount > 0) ? (
            <div className="original-price">${item.price}</div>
          ) : (
            <>
              <div className="new-price">
                ${(item.price * (1 - item.discount)).toFixed(0)}
              </div>
              <div className="old-price">${item.price.toFixed(0)}</div>
              <div className="discount-rate">
                -{(item.discount * 100).toFixed(0)}%
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
}
