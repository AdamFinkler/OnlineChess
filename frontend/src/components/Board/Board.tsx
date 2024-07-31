// import React, { useEffect, useState } from "react";
// import "./board.scss";
// import { Row } from "./Row/Row";
// import { initializeBoard } from "../../utils/gameUtils/func";
// import { Soldier } from "../../classes/Soldier";

// export const Board = () => {
//   const rows = Array(8).fill(null);
//   const [boardArr, setBoardArr] = useState<Soldier[][]>([])

//   useEffect(()=>{
//     BoardArr:Soldier[][] = initializeBoard();
//   },[])

//   return (
//     <div className="board-container">
//       {rows.map((_, index) => (
//         <Row key={index} rowCounter = {index}/>
//       ))}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import "./board.scss";
import { initializeBoard } from "../../utils/gameUtils/func";
import { Soldier } from "../../classes/Soldier";
import { Square } from "./Square/Square";

export const Board = () => {
  const [board, setBoard] = useState<Soldier[][]>([]);

  useEffect(() => {
    const BoardArr: Soldier[][] = initializeBoard();
    setBoard(BoardArr);
  }, []);

  return (
    <div className="board-container">
      {board.map((row, rowIndex) => (
        <div className="row-container" key={rowIndex}>
          {row.map((soldier, colIndex) => (
            <Square
              key={colIndex}
              id={rowIndex * 8 + colIndex}
              soldier={soldier}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
