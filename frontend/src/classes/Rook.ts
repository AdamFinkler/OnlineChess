import { Soldier } from "./Soldier";

export class Rook extends Soldier{
    constructor(xPos:number,yPos:number){
        const isBlack=(yPos<=1?false:true)
        super(5,"RookUrl",xPos,yPos,isBlack)
    }

    public movement():void{}

}