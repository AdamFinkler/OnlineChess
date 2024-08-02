import { Soldier } from "./Soldier";
import blackQueen from "../assets/soldiers/black_queen.svg"
import whiteQueen from "../assets/soldiers/white_queen.svg"

export class Queen extends Soldier{
    constructor(xPos:number , yPos:number)
    {
        const isBlack = (yPos<=1?false:true)
        const imageUrl = isBlack?blackQueen:whiteQueen
        super(9, xPos, yPos, isBlack, imageUrl);
    }

    public movement(){}
}