package main

import (
	"math"
)


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