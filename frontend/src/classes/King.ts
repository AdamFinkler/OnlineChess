import { Soldier } from "./Soldier";
import blackKing from "../assets/soldiers/black_king.svg"
import whiteKing from "../assets/soldiers/white_king.svg"

export class King extends Soldier {
  constructor(xPos: number, yPos: number) {
    const isBlack = yPos <= 1 ? false : true;
    const imageUrl = isBlack? blackKing:whiteKing;
    super(100, xPos, yPos, isBlack, imageUrl);
  }
  public movement(): void {}
}