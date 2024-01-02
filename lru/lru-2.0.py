from uuid import uuid

class Node:
 
  def __init__(self, value):
    self.value = value
    self.next = None
    self.prev = None

class LRU:

  def __init__(self):
    self.hash = {}
    self.head = None
    self.tail = None

  def update_most_frequent(self, id):
    self.update_head(self.hash[id])

  def remove(self):
    pass

  def add(self, value):
    id = uuid()
    self.hash[id] = Node(value)
    self.update_head(self.hash[id])
    if not self.tail:
      self.tail = self.hash[id]

  def update_head(self, node):
    head = self.head
    node.next = head
    self.head = node