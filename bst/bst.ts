type BSTNode<T> = {
  value: T
  left?: BSTNode<T>
  right?: BSTNode<T>
}

class BST<T> {
  public head: BSTNode<T> | undefined

  constructor(){
    this.head = undefined
  }

  append(value: T, current: BSTNode<T> | null = null): void {
    const node: BSTNode<T> = { value: value }  
    if (!this.head){
      this.head = node
      return
    }
    if (!current){
      current = this.head
    }
    if (value > current.value){
      if (current.right) {
        this.append(value, current.right)
      } else {
        current.right = node
      }
    } else {
      if (current.left){
        this.append(value, current.left)
      } else {
        current.left = node
      }
    }
  }

  walk(node: undefined | BSTNode<T> = undefined, nodes: (T|undefined)[] = []): (T|undefined)[]{
    if (!node) {
      node = this.head
    }
    if(node?.left){
      this.walk(node.left, nodes)
    }
    nodes.push(node?.value)
    console.log(node?.value)
    if (node?.right){
      this.walk(node.right, nodes)
    }
    return nodes
  }

  get_min(node: BSTNode<T> | undefined = undefined):T | undefined{
    if(!node){
      node = this.head
    }
    if(node?.left){
      return this.get_min(node.left)
    } else {
      return node?.value
    }
  }

  get_max(node: BSTNode<T> | undefined = undefined):T | undefined{
    if(!node){
      node = this.head
    }
    if(node?.right){
      return this.get_max(node.right)
    } else {
      return node?.value
    }
  }
}

const bst = new BST<number>()

bst.append(100)
bst.append(50)
bst.append(110)
bst.append(105)
bst.append(115)

// console.log(bst.head?.value)
// console.log(bst.head?.right?.value)
// console.log(bst.head?.right?.right?.value)
// console.log(bst.head?.left?.value)

console.log(bst.walk())
console.log(bst.get_min())
console.log(bst.get_max())