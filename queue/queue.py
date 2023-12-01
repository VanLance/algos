class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

class Queue:
  
  def __init__(self, head_value):
    self.head = Node(head_value)
    self.tail = None

  def enqueue(self, value):
    new_node = Node(value)
    if not self.tail:
      self.head.next = new_node
      self.tail = new_node
    else:
      self.tail.next = new_node
      self.tail = new_node

  def dequeue(self):
    current = self.head
    self.head = current.next
    current.next = None
    return current.value

  def peek(self):
    return self.head.value

queue = Queue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

print(queue.head.value)
print(queue.head.next.value)
print(queue.head.next.next.value)
print(queue.head.next.next.next.value)
print(queue.head.next.next.next.next.value)
print(queue.head.next.next.next.next.next.value)
print(queue.head.next.next.next.next.next.next.value)

print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())

print(queue.head.value, 'new head value')