import { useState } from "react";
import { Link } from "react-router-dom";

import { FullSearch } from './FullSearch';
import { SmallSearch } from './SmallSearch';

const downArrowImage = "/downArrow.png";
const searchImage = "/search.png";
const smallSearchImage = "/smallSearch.png";
const cartImage = "/cart.png";
const profileImage = "/profile.png";
const menuImage = "/menu.png";

export function HeaderMini( { handleClick, isClicked, setIsClicked } ) {
  
  const [menuToggled, setMenuToggled] = useState(false);

  function handleMenuToggle(){
    setMenuToggled(prevState => !prevState);
    setIsClicked(false);
  }
  
  return (
    <>
    {
      menuToggled
      &&
      <div className="header-menu">
        <button className="menu-button-open" onClick={handleMenuToggle}>
          <img src={menuImage} alt="menu Image" />
        </button>  
        <nav className="header-nav">
          <ul>
            <li> <Link to="/dashboard"> Dashboard </Link> </li>
            <li> 
              <a href="#">Shop</a>
              <button>
                <img src={downArrowImage} alt="down arrow Image" />
              </button>
            </li>
            <li> <a href="#">On Sale</a> </li>
            <li> <a href="#">New Arrivals</a> </li>
            <li> <a href="#">Brands</a> </li>
          </ul>
        </nav>
      </div>
    }
      <div className= {`header-small`}>    
        <button className="menu-button" onClick={handleMenuToggle}>
            <img src={menuImage} alt="menu Image" />
        </button>        
        
        {
        !menuToggled
        &&
        <div className="header-title">
        shop.co
        </div>
        } 
        <div className="header-icons">
          <SmallSearch searchImage={smallSearchImage} onClick={handleClick} />       
          <button>
            <img src={cartImage} alt="cart Image" />
          </button>
          <button>
            <img src={profileImage} alt="profile Image" />
          </button>
        </div>
      </div>
      <div className="small-field">
        {isClicked && <FullSearch searchImage={searchImage} />}
      </div>
    </>);
}
  