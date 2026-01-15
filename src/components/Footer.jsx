const twitterImage = "/twitter.png";
const facebookImage = "/facebook.png";
const instagramImage = "/instagram.png";
const gitImage = "/git.png";

const visaImage = "/Visa.png";
const mastercardImage = "/Mastercard.png";
const paypalImage = "/Paypal.png";
const appleImage = "/apple.png";
const googleImage = "/google.png";

export default function Footer(){
  return (
      <div className="footer"> 
        <div className="footer-top">
          <div className="footer-title">
            <div className="footer-icon">SHOP.CO</div>
            <div className="footer-info">We have clothes that suits your style and which you’re proud to wear. From women to men.</div>
            <div className="footer-sm">
              <a href="#" className="twitter"><img src={twitterImage} alt="twitter" /></a>
              <a href="#" className="facebook"><img src={facebookImage} alt="facebook" /></a>
              <a href="#" className="instagram"><img src={instagramImage} alt="instagram" /></a>
              <a href="#" className="git"><img src={gitImage} alt="git" /></a>
            </div>
          </div>
          <div className="footer-company footer-links">
            <p>Company</p>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Works</a>
            <a href="#">Career</a>
          </div>
          <div className="footer-help footer-links">
            <p>Help</p>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-faq footer-links">
            <p>FAQ</p>
            <a href="#">Account</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Manage Deliveries</a>
            <a href="#">Payments</a>

          </div>
          <div className="footer-resources footer-links">
            <p>Resources</p>
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-copy">Shop.co © 2000-2023, All Rights Reserved</div>
          <div className="footer-pay">
            <div className="visa">
              <img src={visaImage} alt="visa" />
            </div>
            <div className="master">
              <img src={mastercardImage} alt="master card" />
            </div>
            <div className="paypal">
              <img src={paypalImage} alt="paypal" />
            </div>
            <div className="apple">
              <img src={appleImage} alt="apple" />
            </div>
            <div className="google">
              <img src={googleImage} alt="google" />
            </div>
          </div>
        </div>
      </div>
  );
}