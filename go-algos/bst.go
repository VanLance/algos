package main

import "fmt"

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

func (b BST) inOrder(node BSTNode, nodes []int)[]int{
	if node.left != nil {
		nodes = b.inOrder(*node.left,nodes)
	}
	nodes = append(nodes, *node.value)
	if node.right != nil{
		nodes = b.inOrder(*node.right, nodes)
	}
  return nodes
}

func (b BST) bfs(item int) bool{
	i := 0
	q := []BSTNode{b.root}
	for len(q) > i{
		curr := q[i]
		if curr.left != nil{
			q = append(q, *curr.left)
		}
		if curr.right != nil{
			q = append(q, *curr.right)
		}
		fmt.Println(*curr.value)
		if *curr.value == item {
			return true
		}
		i++
	}
	return false
}
