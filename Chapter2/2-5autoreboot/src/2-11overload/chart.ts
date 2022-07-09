type type_ChartParam = {
  width?: number,
  height?: number,
  radius?: number,
}

class Square {
  public width: number;
  public height: number;
  
  constructor(width_: number, height_: number) // 重载签名
  constructor(paramObj_: type_ChartParam) // 重载签名
  constructor(paramobjOrWidth_: number | type_ChartParam, height_: number = 0) { // 实现签名
    if (typeof paramobjOrWidth_ === 'object') {
      this.width = <number>paramobjOrWidth_.width;
      this.height = <number>paramobjOrWidth_.height;
    } else {
      this.width = paramobjOrWidth_;
      this.height = height_;
    }
  }

  public getArea(): number {
    return this.height * this.width;
  }
}
let c: type_ChartParam = {width: 50, height: 90}

let square = new Square(40, 50)
let squarec = new Square(c)