import { Soldier } from "./Soldier";
import blackKnight from "../assets/soldiers/black_knight.svg";
import whiteKnight from "../assets/soldiers/white_knight.svg";

export class Knight extends Soldier {
  // Implement the abstract method

  constructor(xPos: number, yPos: number) {
    const isBlack = yPos <= 1 ? false : true;
    const imageUrl = isBlack ? blackKnight : whiteKnight;
    super(3, xPos, yPos, isBlack, imageUrl);
  }

  movement(): void {
    console.log("Knight moves!");
  }
}
