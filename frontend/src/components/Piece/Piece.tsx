import React from "react";
import "./piece.scss";
import { Soldier } from "../../classes/Soldier";

interface SoldierProps {
  soldier: Soldier;
}
const Piece = (props: SoldierProps) => {
  return (
    <div className="soldier-container" >
      <img src={props.soldier._imageUrl}/>
    </div>
  );
};

export default Piece;
