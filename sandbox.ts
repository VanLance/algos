
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