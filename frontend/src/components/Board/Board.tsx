import React from "react";
import "./board.scss";
import { Row } from "./Row/Row";

export const Board = () => {
  const rows = Array(8).fill(null);

  return (
    <div className="board-container">
      {rows.map((_, index) => (
        <Row key={index} rowCounter = {index}/>
      ))}
    </div>
  );
};
