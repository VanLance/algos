def compare_trees(node1, node2):
  if node1 == None == node2:
    return True
  if node1 == None or node2 == None:
    return False
  if node1.value != node2.value:
    return False
  return compare_trees(node1.left, node2.left) and compare_trees(node1.right, node2.right)