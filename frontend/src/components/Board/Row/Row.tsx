import React from "react";
import { Square } from "../Square/Square";
import "./row.scss";

interface rowProps {
  rowCounter: number;
}
export const Row = ({ rowCounter }: rowProps) => {
  const squares = Array(8).fill(null);

  return (
    <div className="row-container">
      {squares.map((_, index) => (
        <Square key={index} color={index} rowCounter={rowCounter} id={rowCounter*8 + index} />
      ))}
    </div>
  );
};
