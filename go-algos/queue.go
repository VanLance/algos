package main

type node struct {
	value int 
	next *node
}

type queue struct {
	head *node
	tail *node
}

func (q *queue) enqueue(item int){
	new_node := &node{ value: item }
	if q.tail == nil {
		q.head.next = new_node
		q.tail = new_node
	} else {
		q.tail.next = new_node
		q.tail = new_node
	}
}

func (q *queue) deque(item int) int{
	current := q.head
	q.head = current.next
	return current.value
}	
func (q queue) peek(item int) int{
	return q.head.value
}	