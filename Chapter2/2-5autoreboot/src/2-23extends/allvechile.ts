class Vechile {
  public brand: string; // 品牌
  public vechileNo: string; // 车牌号
  public days: number; // 租赁天数
  public total: number; // 总价
  public deposit: number; // 押金 
  constructor(brand_: string, vechileNo_: string, days_: number, total_: number, deposit_: number) {
    this.brand = brand_
    this.vechileNo = vechileNo_
    this.days = days_
    this.total = total_
    this.deposit = deposit_
  }

  public calculateRent(): number {
    return 0
  }

  public payDeposit() {
    console.log(this.deposit)
  }
}

class Car extends Vechile {
  public type: string
  constructor(brand_: string, vechileNo_: string, days_: number, total_: number, deposit_: number, type_: string) {
    super(brand_, vechileNo_, days_, total_, deposit_)
    this.type = type_;
  }
}