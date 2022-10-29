let People = function (name, sex, phone) {
  this.name = name;
  this.sex = sex;
  this.phone = phone;
}

People.count = 300; // 定义静态属性, ts中我们直接是使用static定义静态属性和方法
People.commonDescribe = function() {
  console.log('需要')
}

People.prototype.doEat = function () {
  console.log(this.name + '吃饭');
}

let people = new People('王五', 23, '1221');

function ChinesePeople(name, sex, phone, national) {
  People.call(this, name, sex, phone)
  this.national = national;
}

let chinesePeople = new ChinesePeople('张三', 22, '2121', '汉族')