import { Soldier } from "./Soldier";

class Rook extends Soldier{
    constructor(xPos:number,yPos:number){
        super(5,"RookUrl",xPos,yPos)
    }

    public movement():void{}

}