import { useState } from "react";

const imageSource = "/Frame.png"

export default function SignUpHeader(){
  
  const [isClosed, setIsClosed] = useState(false);
  
  function handleCloseCLick(){
    setIsClosed(true);
  }

  return (
    <>
      {!isClosed && 
      <div className="signup-header">
      <p>Sign up and get 20% off to your first order. 
      <span>Sign Up Now</span>
      </p>
      <img src={imageSource} alt="X" onClick={handleCloseCLick} />
      </div>}
    </>
  );
}