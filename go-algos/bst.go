package main

// import "fmt"

type BSTNode struct {
	value *int
	right *BSTNode
	left  *BSTNode
}

type BST struct {
	root BSTNode
}

func (b *BST) append(num int) {
	node := BSTNode{value: &num}
	if b.root.value == nil {
		b.root = node
		return
	}
	current := &b.root
	for true {
		if num > *current.value {
			if current.right == nil {
				current.right = &node
				return
			} else {
				current = current.right
			}
		} else {
			if current.left == nil {
				current.left = &node
			} else {
				current = current.left
				return
			}
		}
	}
}
