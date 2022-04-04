import React, {useState} from "react";
import HogDetails from "./HogDetails"

function HogCard({ hog }) {
  const [hogInfo, setHogInfo] = useState(false);

  function handlePigTileClick() {
    setHogInfo((hogInfo) => !hogInfo);
  }

  return (
    <div className="ui eight wide column pigTile">
      <div className="title">
      <h3>{hog.name}</h3>
      </div>
      <div className="image">
        <img src={hog.image} alt="piggy" onClick={handlePigTileClick} />
      </div>
      <div className="extra-details">
      {hogInfo ? <HogDetails hog={hog} /> : null}
      </div>
      
    </div>
  );
}

export default HogCard;
