import React from "react";
import "./square.scss";
import Piece from "../../Piece/Piece";
import { Soldier } from "../../../classes/Soldier";

interface squareProps {
  id: number;
  color: number;
  rowCounter: number;
  image?: string;
  soldier:Soldier;
}

export const Square = (props: squareProps) => {
  let color: string;
  if (props.rowCounter % 2 === 0) {
    color = props.color % 2 === 0 ? "blue" : "light-blue";
  } else {
    color = props.color % 2 === 1 ? "blue" : "light-blue";
  }

  return (
    <div className={`square ${color}`} onClick={() => {console.log("id of this square is: ", props.id);}}>

      <Piece name="S" />
    </div>
  );
};
