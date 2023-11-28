package main

import (
	"fmt"
	"math"
)

func main(){
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 5))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 4))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 2))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 6))
	fmt.Println(bs_slice([]int{1,2,3,4,5,6}, 7))
}

func bs_slice(haystack []int, needle int)(bool, int){
	lo := 0
	high := len(haystack) 
	for lo < high {
		mid := int( math.Floor((float64(lo) + float64(high) ) / 2))
		current := haystack[mid]
		if current == needle {
			return true, mid
		} else if current > needle {
			high = mid
		} else {
			lo = mid + 1
		}
	}
	return false, 0
}