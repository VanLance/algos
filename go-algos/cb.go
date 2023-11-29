package main

import (
	"math"
)

func crystalBall(floors []bool) int {
	sr := int(math.Floor(math.Sqrt(float64(len(floors)))))
	low := 0
	for sr <= len(floors){
		if floors[sr] == true{
			return linearSearch(floors, low)
		}
		low = sr
		sr += sr
	}
	return -1
}

func linearSearch(floors []bool, i int) int {
	for true {
		if floors[i] == true{
			break
		}
		i++
	}
	return i
}