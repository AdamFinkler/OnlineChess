import { Bishop } from "../../classes/Bishop";
import { King } from "../../classes/King";
import { Knight } from "../../classes/Knight";
import { Pawn } from "../../classes/Pawn";
import { Queen } from "../../classes/Queen";
import { Rook } from "../../classes/Rook";
import { Soldier } from "../../classes/Soldier";
import { Board } from "../../components/Board/Board";

export function pawnValidMove(
  x: number,
  y: number,
  newX: number,
  newY: number
) {
  if (newX == x && newY == y + 1) {
    return true;
  }
  return false;
}
export function pawnValidEat(x: number, y: number, newX: number, newY: number) {
  if (newX == x + 1 && newY == y + 1) {
    return true;
  }
  return false;
}
export function initializeBoard() {
  const board: Soldier[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(undefined)
  );
  board[0][0] = new Rook(0, 0);
  board[0][7] = new Rook(7, 0);
  board[0][1] = new Knight(1, 0);
  board[0][6] = new Knight(6, 0);
  board[0][2] = new Bishop(2, 0);
  board[0][5] = new Bishop(5, 0);
  board[0][3] = new Queen(3, 0);
  board[0][4] = new King(4, 0);
  board[7][0] = new Rook(0, 7);
  board[7][7] = new Rook(7, 7);
  board[7][1] = new Knight(1, 7);
  board[7][6] = new Knight(6, 7);
  board[7][2] = new Bishop(2, 7);
  board[7][5] = new Bishop(5, 7);
  board[7][3] = new Queen(3, 7);
  board[7][4] = new King(4, 7);
  for (let i: number = 0; i < 8; i++) {
    board[1][i] = new Pawn(i, 1);
    board[6][i] = new Pawn(i, 6);
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      console.log(`Piece at position (${x}, ${y}):`, board[y][x]);
    }
  }
  console.log("size of arr is: ", board.length);
  return board;
}
