import { Soldier } from "./Soldier";


class Queen extends Soldier{
    constructor(xPos:number , yPos:number)
    {
        const isBlack = (yPos<=1?false:true)
        super(9,'queenUrl', xPos, yPos, isBlack);
    }

    public movement(){}
}