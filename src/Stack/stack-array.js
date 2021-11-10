//封装栈类
export default class StackArray {
  // 用数组来保存栈内元素
  constructor() {
    this.items = []
  }

  // 栈的相关操作

  // 1.添加一个（或几个）新元素到栈顶
  push(element) {
    this.items.push(element)
  }

  // 2.移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop()
  }

  // 3.返回栈顶的元素，不对栈做任何修改
  peek() {
    return this.items[this.items.length-1]
  }

  // 4.判断栈是否为空，如果栈里没有任何元素就返回true，否则返回false
  isEmpty() {
    return this.items.length === 0
  }

  // 5.获取栈中元素个数
  size() {
    return this.items.length
  }

  // 6.移除栈里所有元素
  clear() {
    this.items = []
  }

  // 7.toString方法
  toString() {
    let resultString = ''
    for (const item of this.items) {
      resultString += item + ' '
    }
    return resultString
  }
}
