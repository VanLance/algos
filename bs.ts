function bs(haystack: number[], needle: number):boolean {
  let lo = 0
  let hi = haystack.length

  do {
    const m = Math.floor( lo + (hi - lo) / 2)
    const current = haystack[m]
    if ( current > needle ){
      hi = m
    } else if ( current < needle ) {
      lo = m + 1
    } else {
      return true
    }
  } while (lo < hi)
  return false
}


console.log(bs([1,2,3,4,5,6], 7))