import { LRUNode } from "./lru"
import { v4 as uuid } from 'uuid'

class LeastRecentlyUsed<T> {
  public tail?: LRUNode<T>
  public head?: LRUNode<T>
  public cache: Map<string, LRUNode<T>>
  public reverseCache: Map<T, string>
  public length: number

  constructor(public capacity: number){
    this.capacity = capacity
    this.tail = undefined
    this.head = undefined
    this.cache = new Map<string, LRUNode<T>>()
    this.reverseCache = new Map<T, string>()
    this.length = 0
  }

  get(v: T){
    let id = this.reverseCache.get(v)
    if( !id ){
      this.reverseCache.set( v, uuid())
      this.cache.set(this.reverseCache.get(v)!, this.createNode(v))
      id = this.reverseCache.get(v)!
      this.length++ 
    } else {
      this.detach(this.cache.get(id)!)
      console.log('detaching')  
    }
    const node = this.cache.get(id)!
    this.prepend(node)
    this.trimCache()
  }

  put(v: T, newValue: T){}

  detach(node: LRUNode<T>){
    if (node == this.head ){
      return
    }
    const prev = node.left!
    const next = node.right
    if (node == this.tail){
      this.tail = prev
      this.tail.right = undefined
      return
    }
    prev.right = next
    if (next){
      next.left = prev
    }
  }

  prepend(node: LRUNode<T>){
    node.right = this.head
    if (this.head){
      this.head.left = node
    }
    this.head = node
    if(!this.tail){
      this.tail = node.right
    }
  }

  trimCache(): void | T {
    if (this.length > this.capacity){
      const tail = this.tail!
      this.tail = tail.left!
      tail.left = tail.right = this.tail.right = undefined
      this.length--
      const id = this.reverseCache.get(tail.value)!
      this.reverseCache.delete(tail.value)
      this.cache.delete(id)
      return tail.value
    }
  }

  createNode(v: T): LRUNode<T> {
    const node: LRUNode<T> = { value : v }
    return node
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

const lru = new LeastRecentlyUsed(5)
lru.get('foo')
lru.get('bar')
lru.get('fiz')
lru.get('buzz')
lru.get('fizzbuzz')

lru.display()
console.log(' ')
lru.get('foo')
lru.display()
console.log(' ')
// lru.get()
// lru.display()
lru.get('test')
console.log('bar', 'removed')
lru.display()