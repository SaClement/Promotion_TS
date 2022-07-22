class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function Son(favor, sex) {
  this.favor = favor;
  this.sex = sex;
}

Parent.prototype.friends = ['zza','zzh']

Son.prototype = new Parent('www', 22);
// Son.prototype = Parent.prototype;
Son.prototype.constructor = Son;
console.log('Son.__proto__=', Object.getPrototypeOf(Son));
console.log('Parent.prototype=', Parent.prototype);
console.log('Son.prototype=', Son.prototype); 