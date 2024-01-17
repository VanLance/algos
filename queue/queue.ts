type TypeNode<T> = {
  value: T
  next?: TypeNode<T> 
  prev?: TypeNode<T>
} 

class Queue<T> {
  public length: number = 0
  public head: TypeNode<T>
  public tail: TypeNode<T> | null

  constructor(public headValue: T){
    this.head = { value: headValue } as TypeNode<T>
    this.tail = null
  }

  enqueue(item: T) {
    const newNode = { value: item } as TypeNode<T>
    if (!this.tail){
      this.head.next = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
      this.length++
    }
  }

  deque():T {
    const current = this.head
    if (this.head.next){
      this.head = this.head.next
    }
    this.length--
    return current.value
  } 

  peek():T {
    console.log(this.head.value)
    return this.head.value
  }
}

const queue = new Queue<number>(1)

queue.enqueue(3)
queue.enqueue(9)
queue.enqueue(2)
queue.enqueue(8)

console.log(queue.head.value)
console.log(queue.head.next?.value)
console.log(queue.head.next?.next?.value)
console.log(queue.head.next?.next?.next?.value)
console.log(queue.head.next?.next?.next?.next?.value)
console.log(queue.tail?.value)

console.log(queue.deque())
console.log(queue.deque())
console.log(queue.deque())
// console.log(queue.deque())

console.log(queue.head.next)