class Node:

  def __init__(self, value):
    self.value = value
    self.prev = None

class Stack:

  def __init__(self):
    self.head = None
    self.length = 0

  def pop(self):
    if self.length:
      head = self.head
      self.head = head.prev
      self.length -= 1
      return head.value
    

  def push(self, item):
    self.length += 1
    node = Node(item)
    if self.length == 1:
      self.head = node
      return
    head = self.head
    node.prev = head
    self.head = node

  def peek(self):
    return self.head.value if self.head else None
  



stack = Stack()

stack.push(7)
print(stack.head.value, 7)
stack.push(10)
print(stack.head.value, 10)
stack.push(15)
print(stack.head.value, 15)

print(stack.head.prev.value, 10)

print(stack.pop(),15)
print(stack.pop(),10)
print(stack.pop(),7)
print(stack.head.value, None)