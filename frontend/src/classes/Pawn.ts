import { Soldier } from "./Soldier";
import blackPawn from "../assets/soldiers/black_pawn.svg"
import whitePawn from "../assets/soldiers/white_pawn.svg"

export class Pawn extends Soldier{

    constructor(xPos:number,yPos:number){
        const isBlack=(yPos<=1?false:true)
        const imageUrl = isBlack?blackPawn:whitePawn;
        super(1,xPos,yPos,isBlack,imageUrl)
    }
    movement(): void {
        
    }
}