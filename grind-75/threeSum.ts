function threeSum(alist: number[]): number[][] {
  alist.sort((a:number, b:number) => a - b)
  const numsSet = new Set<string>()
  for (const [i, num] of alist.entries()) {
    let leftI = i + 1;
    let rightI = alist.length - 1;
    while (leftI < rightI) {
      const current = num + alist[leftI] + alist[rightI];
      if( current === 0 ){
        numsSet.add(JSON.stringify([num, alist[leftI], alist[rightI]]))
      }
      if (current > 0) {
        rightI--;
      } else if (current < 0) {
        leftI++;
      } else {
        leftI++;
        rightI--;
      }
    }
  }
  return [...numsSet].map( arrString => JSON.parse(arrString)) 
}

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))