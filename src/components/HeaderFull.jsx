import { FullSearch } from "./FullSearch";
import { SmallSearch } from "./SmallSearch";

import { Link } from "react-router-dom";

const downArrowImage = "/downArrow.png";
const searchImage = "/search.png";
const smallSearchImage = "/smallSearch.png";
const cartImage = "/cart.png";
const profileImage = "/profile.png";

export function HeaderFull({ isClicked, screenSize, handleClick }) {
  return (
    <div className="header">
      <div className="header-title">shop.co</div>
      
      {/*    
        To explain and clarify, there are three cases:
        A. Screen Is bigger than 1360 (whether clicked or not):
          1. This shows the (Full Search) alongside the (Nav)
        B. Screen Is <=1360, this shows what is called (Small Search)
          2. If (Small Search) is clicked, (Full Search) will also appear (both appear)
          3. If (Small Search) is not clicked, (Nav) will also appear (both appear) 
      */}
      
      {!isClicked || screenSize > 1360 ? (
        <nav className="header-nav">
          <ul>
            <li><Link to="/dashboard"> Dashboard </Link></li>
            <li>
              <a href="#">Shop</a>
              <button>
                <img src={downArrowImage} alt="down arrow Image" />
              </button>
            </li>
            <li><a href="#">On Sale</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Brands</a></li>
          </ul>
        </nav>
      ) : (
        <FullSearch searchImage={searchImage} />
      )}
      {screenSize > 1360 && <FullSearch searchImage={searchImage} />}
      <div className="header-icons">
        {screenSize <= 1360 && (
          <SmallSearch searchImage={smallSearchImage} onClick={handleClick} />
        )}
        <button>
          <img src={cartImage} alt="cart Image" />
        </button>
        <button>
          <img src={profileImage} alt="profile Image" />
        </button>
      </div>
    </div>
  );
}
