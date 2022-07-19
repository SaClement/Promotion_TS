export default class NewLocalStorage {

  static localStorage: NewLocalStorage // 引用类型静态属性
  static total: number = 0 // 基本类型静态属性
  // 第一步
  private constructor() {

  }

  // 第二步 - 通过一个静态方法给外部提供一个可以访问的方法
  /**
   * 1.static关键字的方法就是静态方法
   * 2.静态方法和对象无关，外部的对象变量不能调用静态方法和静态属性
   * 3.外部通过类名调用
   */
  public static getInstance() {
    if (!this.localStorage) {
      console.log('创建一个LocalStorage对象')
      this.localStorage = new NewLocalStorage()
      /**
       * static 修饰符是限制外部访问静态属性的，而不能限制静态属性的指向，所以静态属性可以指向一个类对象
       */
    }
    return this.localStorage
  }

  public static addTotal() {
    this.total += 3;
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }
}