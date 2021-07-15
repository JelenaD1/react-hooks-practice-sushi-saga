import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({money, sushiList, updateIndeces, onSushiClick}) {
  return (
    <div className="belt">
      {sushiList.map(sushi => 
          <Sushi money={money} key={sushi.id} sushi={sushi} onSushiClick={onSushiClick} 
          />
        
      )}
      <MoreButton updateIndeces={updateIndeces}/>
    </div>
  );
}

export default SushiContainer;
