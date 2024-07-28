import React from "react";
import "./game-page.scss";
import { Board } from "../../../components/Board/Board";
const GamePage = () => {
  return (
    <div className="game-page-container">
      <h1>game page</h1>
      <Board />
    </div>
  );
};

export default GamePage;
