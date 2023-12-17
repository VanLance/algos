// import { v4 as uuid4 } from 'uuid4'
let id = 0

export type LRUNode<T> = {
  value: T;
  left?: LRUNode<T>;
  right?: LRUNode<T>;
}

class LRU<T> {
	public cache: { [id: string]: LRUNode<T> }
	public head :LRUNode<T> | undefined
	public tail : LRUNode<T> | undefined
  constructor() {
     this.cache = {},
	 this.head = undefined,
	 this.tail = undefined
  }

  update(k: number) {
    const node = this.cache[k];
	if (!node){
		return
	}
	if (node == this.tail){
		this.tail = node.left!
	}
    if (node.left) {
      const prev = node.left;
      const next = node.right;
      prev.right = next;
	}
	node.right = this.head  
	this.head = node
	node.left = undefined
  }

  remove():T {
		const tail = this.tail!
		this.tail = tail.left!
		this.tail.right = undefined
		tail.left = undefined
		return tail.value
  }

  append(value: T){
		const newNode: LRUNode<T> = { value : value } 
		this.cache[id++] = newNode
		if (!this.head){
			this.head = newNode
			return
		} else if (!this.tail) {
			this.head.right = newNode
			newNode.left = this.head
		} else {
			this.tail.right = newNode
			newNode.left = this.tail
		}
		this.tail = newNode
	}

  display(node: LRUNode<T> | undefined = undefined){
		if (!node){
			node = this.head!
		}
		console.log(node!.value, ' -> ')
		if(node.right){
			this.display(node.right)
		}
  }
}


const lru = new LRU()
lru.append('foo')
lru.append('bar')
lru.append('fiz')
lru.append('buzz')
lru.append('fizzbuzz')

lru.display()
console.log(' ')
lru.update(4)
lru.display()
console.log(' ')
lru.update(1)
lru.display()
console.log(' ')
console.log(lru.remove(), 'removed')
lru.display()