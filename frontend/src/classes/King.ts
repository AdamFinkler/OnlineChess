import { Soldier } from "./Soldier";

export class King extends Soldier {
  constructor(xPos: number, yPos: number) {
    const isBlack = yPos <= 1 ? false : true;

    super(100, "KingUrl", xPos, yPos, isBlack);
  }
  public movement(): void {}
}