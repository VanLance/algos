package main

type node struct {
	value int 
	next *node
}

type Queue struct {
	head *node
	tail *node
}

func (q Queue) enqueue(item int){
	new_node := &node{ value: item }
	if q.tail == nil {
		q.head.next = new_node
		q.tail = new_node
	} else {
		q.tail.next = new_node
		q.tail = new_node
	}
}

func (q Queue) deque(item int) int{
	current := q.head
	q.head = current.next
	return current.value
}	
func (q Queue) peek(item int) int{
	return q.head.value
}	