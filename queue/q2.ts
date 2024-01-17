type QNode = {
  value: number
  next?: QNode
  prev: QNode | undefined
}

class Queue2 {
  private tail?: QNode
  private length = 0

  constructor(nodeVal?: number){
    if( nodeVal ){
      this.length++
      this.tail = { value: nodeVal } as QNode
    }
  }

  enqueue(v: number): void{
  
    const current = this.tail
    this.tail = { value: v } as QNode  
    if (this.length++ === 0){
      return
    }
    current!.next = this.tail
    this.tail.prev = current
  }

  deque():number{
    if(this.length === 0){
      return -1
    }
    this.length--
    const current = this.tail
    this.tail = current?.prev
    return current!.value
  }
  
  peek():number{
    if(this.length) return this.tail!.value
    return -1
  }
}

const q = new Queue2(10)

q.enqueue(5)