const zaraImage = "/Zara.png";
const pradaImage = "Prada.png";
const versaceImage = "Versace.png";
const gucciImage = "Gucci.png";
const calvinImage = "Clavin.png"

export default function Brands(){
  return (
      <div className="brands">
        <img src={versaceImage} alt="versace image" className="brand-1" />
        <img src={zaraImage} alt="zara image" className="brand-2" />
        <img src={gucciImage} alt="gucci image" className="brand-3" />
        <img src={pradaImage} alt="parada image" className="brand-4" />
        <img src={calvinImage} alt="calvin klein image" className="brand-5" />
      </div>
  );
}