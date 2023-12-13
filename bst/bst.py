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
    node = self.get_node_recursion(node)
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
      
  def delete(self, value):
    node = self.get_node(value)
    parent = self.get_parent(value)
    if node:
      if not node.left and not node.right:
        if parent.left == node:
          parent.left = None
        else:
          parent.right = None
        print(parent.left, parent.right, parent)
      elif node.left and node.right:
        bridge = self.get_max_node(node.left)
        self.delete(bridge.value)
        if parent.left == node:
          parent.left = bridge
        else:
          parent.right = bridge
      elif node.left and not node.right:
        parent.left = node.left
      else:
        parent.right = node.right
      del node
      
  def get_parent(self, value, node= None):
    node = self.get_node_recursion(node)
    if node.right and node.left and (node.right.value == value or value == node.left.value):
      return node
    if value > node.value:
      if node.right:
        return self.get_parent(value, node.right)
    else:
      if node.left:
        return self.get_parent(value, node.left)
    return False

  def search(self, value, node = None):
      node = self.get_node_recursion(node)
      if value == node.value:
        return True 
      if value > node.value:
        if node.right:
          return self.search(value, node.right)
      else:
        if node.left:
          return self.search(value, node.left)
      return False

  def bfs(self, item):
    q = [self.root]
    while q:
      current = q.pop(0)
      if current.left:
        q.append(current.left)
      if current.right:
        q.append(current.right)
      print(current.value)
      if current.value == item:
        return True, item
    return False, -1      

  def in_order(self, node = None, nodes = None):
    if not nodes:
      nodes = [] 
    node = self.get_node_recursion(node)
    if node.left:
      nodes = self.in_order(node.left, nodes)
    nodes.append(node.value)
    if node.right:
      nodes = self.in_order(node.right, nodes)
    return nodes

  def get_min_node(self, node = None):
    node = self.get_node_recursion(node)
    if node.left:
      return self.get_min(node.left)
    return node

  def get_min(self):
    return self.get_min_node().value
  
  def get_max_node(self, node = None):
    node = self.get_node_recursion(node)
    if node.right:
      return self.get_max(node.right)
    return node
  
  def get_max(self):
    return self.get_max_node().value
  
  def get_node(self, value, node = None):
    node = self.get_node_recursion(node)
    if value == node.value:
      return node
    if value > node.value:
      if node.right:
        return self.get_node(value, node.right)
    else:
      if node.left:
        return self.get_node(value, node.left)   

  def get_node_recursion(self, node):
    if not node:
      return self.root
    return node

bst = BST()

bst.append(100)
bst.append(50)
bst.append(110)
bst.append(105)
bst.append(115)
bst.append(25)
print(bst.in_order(),'before')


bst.delete(110)
print(bst.in_order(),'after ')

bst.delete(50)
print(bst.in_order(),'after ')
bst.delete(25)
print(bst.in_order(),'after ')


# print(bst.bfs(115))

# print(bst.bfs(800))
# print(bst.root.value)
# print(bst.root.right.value)
# print(bst.root.right.right.value)
# print(bst.root.left.value)

# print(bst.search(100))
# print(bst.search(110))
# print(bst.search(50))
# print(bst.search(75))

# # print(bst.walk())
# print(bst.get_min())
# print(bst.get_max())

