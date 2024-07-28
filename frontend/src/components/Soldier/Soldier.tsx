import React from "react";
import "./soldier.scss";
interface SoldierProps {
  name: String;
}
const Soldier = (props: SoldierProps) => {
  return (
    <div className="soldier-container">
      <p className="soldier-text">{props.name}</p>
    </div>
  );
};

export default Soldier;
