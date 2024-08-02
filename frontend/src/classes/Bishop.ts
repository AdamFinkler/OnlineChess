import { Soldier } from "./Soldier";
import blackBishop from "../assets/soldiers/black_bishop.svg";
import whiteBishop from "../assets/soldiers/white_bishop.svg";

export class Bishop extends Soldier {
  constructor(xPos: number, yPos: number) {
    const isBlack = yPos <= 1 ? false : true;
    const imageUrl = isBlack ? blackBishop : whiteBishop;
    super(3, xPos, yPos, isBlack, imageUrl);
  }
  public movement(): void {}
}
