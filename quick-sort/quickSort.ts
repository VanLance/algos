const nums = [100,88,77,66,55,44,33,85,74,49,1]

quickSort(nums,0,nums.length - 1)
console.log(nums)

function quickSort(nums: number[], low: number, high: number):void{
  
  if (low < high){
    const pivot = weakSort(nums,low,high)
    quickSort(nums,low, pivot - 1)
    quickSort(nums, pivot + 1, high)  
  }
}

function weakSort(nums: number[], low: number, high: number){
  const pivot = Math.floor((high + low) / 2) + 1
  const current = nums[pivot]
  for(let i = low; i <= high; i++){
    if(nums[i] < current){
      const temp = nums[i]
      nums[i] = nums[low]
      nums[low] = temp
      low++
    }
  }
  nums[pivot] = nums[low]
  nums[low] = current
  return low
}