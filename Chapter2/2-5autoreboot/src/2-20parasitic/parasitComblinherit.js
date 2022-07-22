function createNewPrototypeObj(parent, child) {
  let middle = {};
  // 第一步： 创建一个寄生构造函数
  function Middle() {
    this.count = 23;
    this.constructor = child;
  }
  Middle.prototype = parent.prototype;
  // 第二步： 创建一个寄生新创建的构造函数的对象
  middle = new Middle();
  return middle;
}

// 子类的原型对象空间指向新创建的构造函数的对象
Children.prototype = createNewPrototypeObj(Parent, Children)
