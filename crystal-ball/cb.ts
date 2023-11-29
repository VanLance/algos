function crystalBall(floors: boolean[]): number{
  const sr = Math.floor(Math.sqrt(floors.length))
  let [low, high] = [0, sr]
  do {
    if (floors[high] === true){
      return linearSearch(floors, low)
    }
    low = sr
    high += sr
  } while (sr < high)
  return -1
}

function linearSearch(floors: boolean[], low: number): number {
  do {
    if (floors[low] === true) return low
    else low++
  } while (true)
}

console.log(crystalBall([false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true]))
console.log(crystalBall([false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]))