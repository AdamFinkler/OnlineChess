export abstract class Soldier {
    
    readonly _value: number;
    readonly _imageUrl: string;
  
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

    constructor(value: number, imageUrl: string, xPos: number, yPos: number) {
      this._value = value;
      this._imageUrl = imageUrl;
      this._xPos = xPos;
      this._yPos = yPos;
    }
  
    abstract movement(): void;
  }
  
  