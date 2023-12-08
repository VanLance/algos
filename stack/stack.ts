type NodeContainer<T> = {
  value: T,
  prev?: NodeContainer<T> 
}

class Stack<T> {
  public length: number
  public head: NodeContainer<T> | undefined
  
  constructor(){
    this.length = 0
    this.head = undefined
  }

  push(item: T):void{
    const node: NodeContainer<T> = { value: item }
    this.length++
    if ( this.length === 1 ){
      this.head = node
      return
    }
    const head = this.head
    node.prev = head
    this.head = node
  }

  pop(): T | undefined {
    const head = this.head
    this.head = head?.prev

    this.length--
    return head?.value
  }
  
  peek(): T | undefined{
    return this.head?.value
  }
}


const stack = new Stack<number>()

stack.push(7)
console.log(stack.head!.value, 7)
stack.push(10)
console.log(stack.head!.value, 10)
stack.push(15)
console.log(stack.head!.value, 15)

console.log(stack.head?.prev?.value, 10)

console.log(stack.pop(),15)
console.log(stack.pop(),10)
console.log(stack.pop(),7)
console.log(stack.head?.value, undefined)