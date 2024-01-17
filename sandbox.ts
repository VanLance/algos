
function foo(bar: string[] = []):string[]{
  bar.push('foo')
  return bar
}

console.log(foo())
console.log(foo())
console.log(foo())

const a = undefined
const b = undefined

if (a===undefined || b === undefined){
  console.log('both undefined')
}

console.log(Math.floor((10+5) / 2))

const bar = [0]


console.log(bar[1] < bar[1])

let fizz: number | undefined = 3
let buzz: number | undefined = 4
let fizbuzz: number | undefined = 2

fizz = buzz = fizbuzz = undefined

console.log(fizz,buzz,fizbuzz)
const newSet = new Set([[0],[0]])
console.log(newSet)

const ob = {[3]: true}
console.log(ob[3])

console.log([[-1,-1,2],[-1,0,1],[-1,-2,3],[-1,0,1],[-2,0,2],[-3,0,3],[-3,1,2],[-4,0,4],[-4,1,3]].sort(),[[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]].sort() )