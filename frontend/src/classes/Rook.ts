import { Soldier } from "./Soldier";
import blackRook from "../assets/soldiers/black_rook.svg"
import whiteRook from "../assets/soldiers/white_rook.svg"

export class Rook extends Soldier{
    constructor(xPos:number,yPos:number){
        const isBlack=(yPos<=1?false:true)
        const imageUrl = isBlack?blackRook:whiteRook
        super(5,xPos,yPos,isBlack, imageUrl)
    }

    public movement():void{}

}