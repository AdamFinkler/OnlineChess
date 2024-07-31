import React from "react";
import "./piece.scss";
interface SoldierProps {
  name: String;
}
const Piece = (props: SoldierProps) => {
  return (
    <div className="soldier-container">
      <p className="soldier-text">{props.name}</p>
    </div>
  );
};

export default Piece;
