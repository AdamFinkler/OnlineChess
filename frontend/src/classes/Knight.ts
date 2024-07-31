import { Soldier } from "./Soldier";

export class Knight extends Soldier {
  // Implement the abstract method

  constructor(xPos: number, yPos: number) {
    const isBlack = yPos <= 1 ? false : true;
    super(3, "knightUrl", xPos, yPos, isBlack);
  }
  
  movement(): void {
    console.log("Knight moves!");
  }
}
