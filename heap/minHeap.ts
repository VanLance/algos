class MinHeap{
  
  constructor(public data: number[] = [], public length = 0){}

  add(v: number){
    this.data[this.length] = v
    this.heapUp(this.length)
    this.length++
  }

  delete():number | undefined{
    if(this.length === 0) return
    const current = this.data[--this.length]
    const out = this.data.pop() 
    this.data[0] = current
    this.heapDown(0)
    return out
  }

  heapUp(i: number):void{
    if (this.length < 1){
      return
    }
    const parentI = this.getParent(i)
    const partentV = this.data[parentI]
    const currentV = this.data[i]
    if (currentV < partentV){
      this.data[i] = partentV
      this.data[parentI] = currentV
      this.heapUp(parentI)
    }
  }

  heapDown(i: number):void{
    const lChildInd = this.getLChild(i)
    const rChildInd = this.getRChild(i)
    if (lChildInd >= this.length){
      return
    }
    const lChildValue = this.data[lChildInd]
    const rChildValue = this.data[rChildInd]
    const currentValue = this.data[i]
    console.log(lChildValue, rChildValue, currentValue)
    if (lChildValue < rChildValue && lChildValue < currentValue){
      this.data[lChildInd] = currentValue
      this.data[i] = lChildValue
      this.heapDown(lChildInd)
    } else if ( rChildValue < lChildValue && rChildValue < currentValue){
      this.data[rChildInd] = currentValue
      this.data[i] = rChildValue
      this.heapDown(rChildInd)
    }
  }

  getParent(i: number):number {
      return Math.floor((i-1) / 2)
  }

  getRChild(i: number){
    return i * 2 + 2
  }
  
  getLChild(i: number):number{
    return i * 2 + 1
  }
}

// const mh = new MinHeap()

// mh.add(50)
// mh.add(75)
// mh.add(80)
// mh.add(100)
// mh.add(150)
// mh.add(88)
// mh.add(90)
// mh.add(130)
// mh.add(110)
// mh.add(200)
// mh.add(180)
// mh.add(60)
// console.log(mh.data)
// mh.delete()
// console.log(mh.data)


const mh = new MinHeap()

mh.add(100)
mh.add(75)
mh.add(90)
mh.add(60)
mh.add(55)
mh.add(40)
mh.add(78)
mh.add(17)
mh.add(19)

console.log(mh.data)
console.log(mh.data[0])
console.log(mh.delete())

console.log(mh.data)