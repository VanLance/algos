package main

func bubbleSort(nums []int) {
	passes := 0
	sorted := false
	for sorted == false {
		sorted = true
		for i := 0; i < len(nums) - (1 + passes); i++ {
			current := nums[i]
			if current > nums[i + 1] {
				nums[i] = nums[i + 1]
				nums[i+1] = current
				sorted = false
			}
		}
		passes ++
	}
}

