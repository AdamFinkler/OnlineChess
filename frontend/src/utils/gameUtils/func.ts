import { Bishop } from "../../classes/Bishop"
import { King } from "../../classes/King"
import { Knight } from "../../classes/Knight"
import { Pawn } from "../../classes/Pawn"
import { Queen } from "../../classes/Queen"
import { Rook } from "../../classes/Rook"
import { Soldier } from "../../classes/Soldier"
import { Board } from "../../components/Board/Board"



export function pawnValidMove(x:number,y:number,newX:number,newY:number)
{
    if(newX==x && newY==y+1){return true}
    return false
}
export function pawnValidEat(x:number,y:number,newX:number,newY:number)
{
    if(newX==x+1 && newY==y+1){return true}
    return false
}
export function initializeBoard(){
    const board: Soldier[][] = Array.from({ length: 8 }, () => Array(8).fill(undefined));
    board[0][0]=new Rook(0,0)
    board[7][0]=new Rook(7,0)
    board[1][0]= new Knight(1,0)
    board[6][0]= new Knight(6,0)
    board[2][0]= new Bishop(2,0) 
    board[5][0]= new Bishop(5,0)
    board[3][0]= new Queen(3,0) 
    board[4][0]= new King(4,0)
    board[0][7]=new Rook(0,7)
    board[7][7]=new Rook(7,7)
    board[1][7]= new Knight(1,7)
    board[6][7]= new Knight(6,7)
    board[2][7]= new Bishop(2,7) 
    board[5][7]= new Bishop(5,7)
    board[3][7]= new Queen(3,7) 
    board[4][7]= new King(4,7)
    for (let i: number = 0; i < 8; i++) {
        board[i][1]=new Pawn(i,1)
        board[i][6]=new Pawn(i,6)
    }    
    return board;
}