import { Soldier } from "./Soldier";

export class Pawn extends Soldier{

    constructor(xPos:number,yPos:number){
        const isBlack=(yPos<=1?false:true)
        super(1,"pawnUrl",xPos,yPos,isBlack)
    }
    movement(): void {
        
    }
}