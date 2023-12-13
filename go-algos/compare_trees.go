package main

func compareTrees(node1, node2 BSTNode) bool{
	if node1.value == nil && node2.value == nil {
		return true
	}
	if node1.value == nil || node2.value != nil {
		return false
	}
	if node1.value != node2.value {
		return false
	}
	return compareTrees(*node1.left, *node2.left) && compareTrees(*node1.right, *node2.right)
}