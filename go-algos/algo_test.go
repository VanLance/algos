package main

import (
	"fmt"
	"testing"
)

func TestBSTAppend( t *testing.T){
	bst := BST{}
	bst.append(10)
	rootValue := *bst.root.value
	if rootValue != 10 {
		t.Errorf("Expected root 10 got %v", rootValue)
	}
	bst.append(100)
	fmt.Println(bst.root)
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