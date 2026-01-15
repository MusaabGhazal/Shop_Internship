const casualImage = "/Casual.png";
const formalImage = "/Formal.png";
const partyImage = "/party.png";
const gymImage = "/Gym.png";

export default function Categories() {
  return (
    <div className="categories">
      <p className="categories-header">BROWSE BY dress STYLE</p>
      <div className="cards">
        <div className="row-1">
          <div className="card card-1">
            <p>Casual</p>
            <img src={casualImage} alt="casual Image" />
          </div>
          <div className="card card-2">
            <p>Formal</p>
            <img src={formalImage} alt="formal Image" />
          </div>
        </div>
        <div className="row-2">
          <div className="card card-3">
            <p>Party</p>
            <img src={partyImage} alt="Party Image" />
          </div>
          <div className="card card-4">
            <p>Gym</p>
            <img src={gymImage} alt="Gym Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
