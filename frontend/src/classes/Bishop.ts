import { Soldier } from "./Soldier";

export class Bishop extends Soldier {
  constructor(xPos: number, yPos: number) {
    const isBlack = yPos <= 1 ? false : true;

    super(3, "BishopUrl", xPos, yPos, isBlack);
  }
  public movement(): void {}
}
