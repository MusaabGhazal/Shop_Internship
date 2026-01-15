const mailImage = "/mail.png"

export default function Subscribe(){
  return (
      <div className="subscribe">
        <div className="subscribe-header">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
        <div className="subscribe-fields">
          <div className="subscribe-input">
            <img src={mailImage} alt="mail image" />
            <input type="email" className="" placeholder="Enter your email address"/>
          </div>
          <button className="subscribe-button">Subscribe to Newsletter</button>
        </div>
      </div>
  );
}