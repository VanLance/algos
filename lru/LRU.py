from uuid import uuid4

class Node:

	def __init__(self, value):
		self.value = value
		self.next = None
		self.prev = None

class LeastRecentlyUsed:

	def __init__(self, cap):
		self.cap = cap
		self.head = None
		self.tail = None
		self.length = 0
		self.cache = {}
		self.reverse_cache = {}

	def get(self, v):
		if v in self.reverse_cache:
			id = self.reverse_cache[v]
			node = self.cache[id]
		else:
			node = Node(v)
			self.reverse_cache[node] = uuid4()
			id = self.reverse_cache[node]
			self.cache[id] = node
			self.length += 1
		self.detach(node)
		self.prepend(node)
		self.trim_cache()
		
	def put(self, id, new_value):
		pass

	def detach(self, node):
		prev = node.left
		next = node.right
		if prev:
			prev.next = next
		node.left = None
		node.right = None
		if node == self.tail:
			self.tail = prev

	def prepend(self, node):
		node.right = self.head
		if not self.tail and node.right:
			self.tail = node.right
		if self.head:
			self.head.left = node

	def trim_cache(self):
		if self.length > self.cap:
			tail = self.tail
			self.tail = tail.prev
			tail.left = tail.right = None
		return tail.value
	