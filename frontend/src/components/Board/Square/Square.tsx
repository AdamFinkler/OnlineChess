import React from "react";
import "./square.scss";
import Soldier from "../../Soldier/Soldier";

interface squareProps {
  id: number;
  color: number;
  rowCounter: number;
  image?: string;
}

export const Square = (props: squareProps) => {
  let color: string;
  if (props.rowCounter % 2 === 0) {
    color = props.color % 2 === 0 ? "blue" : "light-blue";
  } else {
    color = props.color % 2 === 1 ? "blue" : "light-blue";
  }

  return (
    <div
      className={`square ${color}`}
      onClick={() => {
        console.log("id of this square is: ", props.id);
      }}
    >
      <Soldier name="S" />
    </div>
  );
};
