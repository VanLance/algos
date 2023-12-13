package main

import "math"

func quickSort(arr *[]int, lo int, high int){
	if lo < high{
		pivotPoint := weakSort(arr,lo,high)
		quickSort(arr, lo, pivotPoint - 1)
		quickSort(arr, pivotPoint + 1, high)
	}
}

func weakSort(arrPointer *[]int, lo int, high int) int{
	arr := *arrPointer
	pivotPoint := int(math.Floor(float64((high + lo) / 2))) + 1
	pivotValue := arr[pivotPoint]
	for i := lo; i <= high; i++ {
		if arr[i] < pivotValue {
			temp := arr[lo]
			arr[lo] = arr[i]
			arr[i] = temp
			lo++
		}
	}
	arr[pivotPoint] = arr[lo]
	arr[lo] = pivotValue
	return lo
}