import { LinkedList, Node } from '../LinkedList/linkedList'

// 双向链表结构的封装

// 双向链表的节点类（继承单向链表的节点类）
class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

// 双向链表类（继承单向链表类）
export class DoublyLinkedList extends LinkedList {

  constructor() {
    super()
    this.tail = null
  }

  // ------------ 链表的常见操作 ------------ //

  // append(element) 往双向链表尾部追加一个新的元素
  // 重写 append()
  append(data) {

    // 1、创建新节点
    const newNode = new DoublyNode(data)

    // 2、追加新节点
    if (this.length === 0) {
      // 链表长度为 0 时，直接修改头尾指针即可
      this.head = newNode
      this.tail = newNode
    } else {
      // ！！跟单向链表不同,不用通过循环找到最后一个节点,因为有尾指针
      // 当添加一个节点时，涉及3个指针要修改
      // 1、原来的尾节点的next指针要指向新节点
      // 2、新节点的prev指针要指向原来的尾节点
      // 3、尾指针要指向新节点
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    // 3、追加完新节点后，链表长度 + 1
    this.length++
  }

  // insert(position, data) 插入元素
  // 重写 insert()
  insert(position, data) {
    
    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.length) return false

    // 2、创建新的双向链表节点
    const newNode = new DoublyNode(data)

    // 3、插入节点，有3钟情况要考虑

    // 3.1 在第 0 个位置插入
    if (position === 0) {
      if (this.length === 0) {

        // 链表长度不为 0 时，直接修改头尾指针即可
        this.head = newNode
        this.tail = newNode
      } else {

        // 链表长度为 0 时，涉及3个指针要修改，要注意修改次序
        // 1、新节点的next指针要指向原来的头节点
        // 2、原来的头节点的prev指针要指向新节点
        // 3、头指针要指向新节点
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode

      }
    } else if (position === this.length) {

      // 3.2 在最后一个位置插入,涉及3个指针要修改，要注意修改次序
      // 1、新节点的prev指针要指向原来的尾节点
      // 2、原来的尾节点的next指针要指向新节点
      // 3、尾指针要指向新节点
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      
    } else {
      // 3.3 在中间位置插入，对应 0 < position < length 的情况

      // 初始化一些状态变量
      // 与单向链表不同的是，不需要previous变量保存上一个节点的指针了
      let index = 0           // 遍历索引初始化为 0
      let current = this.head // 遍历的当前节点初始化为 head

      // 在 0 ~ position 之间遍历，不断地更新 current
      // 直到找到要插入的位置
      while (index++ < position) {
        current = current.next
      }

      // 在当前节点之前插入新节点，涉及4个指针要修改，要注意修改次序
      // 1、新节点的prev指针要指向当前节点的prev
      // 2、新节点的next指针要指向当前节点
      // 3、当前节点的prev的next指针要指向新节点
      // 4、当前节点的prev指针要指向新节点
      newNode.prev = current.prev
      newNode.next = current
      current.prev.next = newNode
      current.prev = newNode
    }

    // 4、追加完新节点后，链表长度 + 1
    this.length++
    // 5、返回新添加的节点，方便其他操作
    return newNode
  }

  // forwardToString() 链表数据从前往后以字符串形式返回
  forwardToString() {
    let currentNode = this.head
    let result = ''

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + '--'
      currentNode = currentNode.next
    }

    return result
  }

  // backwardString() 链表数据从后往前以字符串形式返回
  backwardString() {
    let currentNode = this.tail
    let result = ''

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + '--'
      currentNode = currentNode.prev
    }

    return result
  }

}