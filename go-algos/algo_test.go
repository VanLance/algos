package main

import (
	"fmt"
	"testing"
)

func TestQuickSort(t *testing.T){
	nums := []int{ 100, 88, 77, 99, 55, 44,22,87,65, 1 }
	quickSort(&nums, 0 , len(nums) - 1)
	for num, i := range nums{
		if i < len(nums) - 2 && num > nums[i+1]{
			t.Errorf("Expected nums sorted got %v", nums)
		}
	}
}

var	bst = BST{}

func TestBSTAppend( t *testing.T){
	bst.append(10)
	rootValue := *bst.root.value
	if rootValue != 10 {
		t.Errorf("Expected root 10 got %v", rootValue)
	}
	bst.append(100)
	rootRight := bst.root.right.value
	if *rootRight != 100 {
		t.Errorf("Expected root 100 got %v", rootRight)
	}
	bst.append(5)
	rootleft := bst.root.left.value
	fmt.Println(rootleft)
	if *rootleft != 5 {
		t.Errorf("Expected root 5 got %v", rootleft)
	}
}

func TestInOrderBST(t *testing.T){
	sortedValues := bst.inOrder(bst.root, []int{})
	fmt.Println(sortedValues)
	if sortedValues[0] != 5{
		t.Errorf("Expected [5,10,100] got %v", sortedValues)
	}
	if sortedValues[1] != 10{
		t.Errorf("Expected [5,10,100] got %v", sortedValues)
	}
	if sortedValues[2] != 100{
		t.Errorf("Expected [5,10,100] got %v", sortedValues)
	}
}

func TestBSTBFS(t *testing.T){
	found := bst.bfs(100)
	if found != true{
		t.Errorf("Expected true got %v", found)
	}
}