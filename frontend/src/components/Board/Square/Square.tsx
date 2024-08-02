import React from "react";
import "./square.scss";
import Piece from "../../Piece/Piece";
import { Soldier } from "../../../classes/Soldier";

interface squareProps {
  id: number;
  rowIndex: number;
  colIndex: number;
  image?: string;
  soldier?: Soldier;
}

export const Square = ({ id, rowIndex, colIndex, soldier }: squareProps) => {
  console.log("solider is: ", soldier);
  let squareColor;
  if (rowIndex % 2 == 0) {
    squareColor = colIndex % 2 == 0 ? "brown" : "yellow";
  } else {
    squareColor = colIndex % 2 == 0 ? "yellow" : "brown";
  }
  return (
    <div
      className={`square ${squareColor}`}
      onClick={() => {
        console.log("id of this square is: ", id);
      }}
    >
      {soldier ? <Piece soldier={soldier} /> : null}
    </div>
  );
};
