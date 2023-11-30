const bubbleSort = (arr: number[]) => {
  let [sorted, passes] = [false, 0]
  do {
    sorted = true
    for (let i = 0; i < arr.length - (1+passes); i++){
      const current = arr[i]
      if (current > arr[i + 1]){
        arr[i] = arr[i+1]
        arr[i + 1] = current
        sorted = false
      }
    }
    passes++
  } while ( sorted == false )
}

const nums = [100,99,1,4,8,5]

bubbleSort(nums)

console.log(nums)