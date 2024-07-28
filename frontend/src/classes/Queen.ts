import { Soldier } from "./Soldier";


class Queen extends Soldier{
    constructor(xPos:number , yPos:number)
    {
        super(7,'queenUrl', xPos, yPos);
    }

    public movement(){}
}