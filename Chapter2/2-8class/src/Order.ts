import OrderDetail from "./OrderDetail";

class Order {
    public orderId: number = 0;
    public date: Date = new Date();
    public custName: string = "noCustName";
    public phone: string = "";
    // 引用属性 【数组】
    // 定义一个Array数组，数组中的元素都是OrderDetail的类型的
    public orderDetails: Array<OrderDetail> = []
    constructor (
        orderId_: number,
        date_: Date,
        custName_:string,
        phone_: string,
        orderDetails_: Array<OrderDetail>
    ) {
        this.orderId = orderId_;
        this.date = date_;
        this.custName = custName_;
        this.phone = phone_;
        this.orderDetails = orderDetails_;
    }
}