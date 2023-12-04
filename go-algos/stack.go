package main

type stackNode struct {
	value int
	prev *stackNode
}

type stack struct {
	head *stackNode 
	length int
}

func(s *stack) push(item int) {
	node := stackNode{ value: item }
	s.length++
	if s.length == 1 {
		s.head = &node
		return
	}
	head := s.head
	node.prev = head
	s.head = &node
}

func (s *stack) pop() int{
	if s.length > 0 {
		s.length--
		oldHead := s.head
		s.head = oldHead.prev
		oldHead.prev = nil
		return oldHead.value
	}
	return 0
}

func (s stack) peek() int{
	return s.head.value
}

