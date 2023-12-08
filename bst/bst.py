class Node:

  def __init__(self, value):
    self.value = value
    self.right = None
    self.left = None

  def __repr__(self):
    return f'<Node: {self.value}>'

class BST:

  def __init__(self):
    self.root = None

  def append(self, value, node = None):
    new_node = Node(value)
    if not self.root:
      self.root = new_node
      return
    node = self.get_node(node)
    if new_node.value > node.value:
      if node.right:
        self.append(value, node.right)
      else:
        node.right = new_node
    else:
      if node.left:
        self.append(value, node.left)
      else:
        node.left = new_node
      
       
  def search(self, value, node = None):
    node = self.get_node(node)
    if value == node.value:
      return True, node.value
    if value > node.value:
      if node.right:
        return self.search(value, node.right)
    else:
      if node.left:
        return self.search(value, node.left)
    return False

  def in_order(self, node = None, nodes = []):
    node = self.get_node(node)
    if node.left:
      self.in_order(node.left, nodes)
    nodes.append(node.value)
    if node.right:
      self.in_order(node.right, nodes)
    return nodes

  def get_min(self, node = None):
    node = self.get_node(node)
    if node.left:
      return self.get_min(node.left)
    return node.value

  def get_max(self, node = None):
    node = self.get_node(node)
    if node.right:
      return self.get_max(node.right)
    return node.value
  
  def get_node(self, node):
    if not node:
      return self.root
    return node

bst = BST()

bst.append(100)
bst.append(50)
bst.append(110)
bst.append(105)
bst.append(115)

print(bst.root.value)
print(bst.root.right.value)
print(bst.root.right.right.value)
print(bst.root.left.value)

print(bst.search(100))
print(bst.search(110))
print(bst.search(50))
print(bst.search(75))

# print(bst.walk())
print(bst.get_min())
print(bst.get_max())

print(bst.in_order())