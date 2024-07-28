import { Soldier } from "./Soldier";


class Knight extends Soldier {
    // Implement the abstract method
    constructor(xPos: number, yPos: number) {
        super(3, 'knightUrl', xPos, yPos); 
      }
    
    movement(): void {
      console.log("Knight moves!");
    }
  }