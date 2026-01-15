import { useState, useEffect } from "react";

import { HeaderMini } from './HeaderMini';
import { HeaderFull } from './HeaderFull.jsx';

export default function Header(){

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isClicked, setIsClicked] = useState(false);

  function handleClick(){
    setIsClicked(prevState => !prevState);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    {
      ( screenSize > 768 )
      ?
      <HeaderFull   isClicked={isClicked} screenSize={screenSize} handleClick={handleClick}/>
      :
      <HeaderMini  handleClick={handleClick} isClicked={isClicked} setIsClicked={setIsClicked} /> 
    }
    </>
  );
}