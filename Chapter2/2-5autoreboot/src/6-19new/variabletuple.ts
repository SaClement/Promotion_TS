let [username, age, ...rest]: [user_: string, age_: number, ...other: any[], hesuan_: boolean] = ["wangwu", 22, "大渡口区八桥镇", "1321213121", "clement", true];
// console.log(username)
// console.log(age)
// console.log(rest)

// 当我们想把一个只读常量中的其中某几位组成一个数组
let constNums = [10, 20, 30, "abc", 66] as const;
// 将元组弱化为“数组” ...any[]
function tail(arr: readonly [...any[]]) {
  // 我们不能修改常量的值,但我们可以通过结构的方式
  let c = arr.slice(1)
  let [first, ...rest] = arr;
  return rest
}

console.log(tail(constNums))