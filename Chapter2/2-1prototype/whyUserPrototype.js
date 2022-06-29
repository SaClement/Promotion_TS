// Prototype 原型
function QQUser (QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_;
  this.QQAge = QQAge_;
  this.QQMark = QQMark_;

  // 引用对象类型 引用类型 对象类型 引用数据类型
  // 数组是引用数据类型
  this.commonFriends = ["骑驴看海", "大漠上的英雄", "坚实的果子", "小草"];
  // 函数是引用数据类型
  this.show = function() {
    console.log(`QQ号:${this.QQNo},Q龄:${this.QQAge},QQ标注:${this.QQMark}`);
    console.log(`共同的好友是:${this.commonFriends}`);
  }
}

// 对象也叫实例(instance)
// QQZhangSan 叫做对象变量 - 栈中
// new出来的叫做对象 - 运行期间在堆中开辟内存空间
let QQZhangSan = new QQUser("张三", 15, "王明阳传人")