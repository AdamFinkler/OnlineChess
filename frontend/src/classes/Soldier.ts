export abstract class Soldier {

    readonly _value: number;
    readonly _imageUrl: string;
    readonly _isBlack: boolean;

    private _xPos: number;
    private _yPos : number;
    
    setX(x: number): void {
        this._xPos = x;
      }
    
      setY(y: number): void {
        this._yPos = y;
      }
      public getX(x: number): number {
        return this._xPos = x;
      }
    
     public getY(y: number): number {
        return this._yPos = y;
      }

    constructor(value: number, xPos: number, yPos: number, isBlack: boolean, image:string) {
      this._value = value;
      this._xPos = xPos;
      this._yPos = yPos;
      this._isBlack = isBlack;
      this._imageUrl = image
    }

    
    abstract movement(): void;
  }
  
  