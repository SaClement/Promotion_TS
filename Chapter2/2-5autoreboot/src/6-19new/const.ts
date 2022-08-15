// const arr = [10, 20, 30, 40]
// arr = [11, 22, 33, 44] // error 无法匹配到"arr",因为它是个常数
// arr[0] = 11 // sucess

const arr = [10, 20, 30, 40] as const
// arr[0] = 11 // 无法匹配到"0", 因为它是只读属性

function setArr(arr: readonly any[]) {
  // arr[0] = 20
}

setArr(arr)
