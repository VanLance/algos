class MinHeap:

  def __init__(self):
    self.data = {}
    self.length = 0

  def heap_up(self, i):
    if i == 0:
      return
    parent_i = self.get_parent(i)
    parent_v = self.data[parent_i]
    current_v = self.data[i]
    if parent_v > current_v:
      self.data[i], self.data[parent_i] = parent_v, current_v
      self.heap_up(parent_i)

  def heap_down(self, i):
    l_child_i = self.get_l_child(i)
    
    r_child_i = self.get_r_child(i)
    if l_child_i >= self.length:
      return
    if r_child_i == self.length:
      if self.data[l_child_i] < self.data[i]:
        self.data[l_child_i], self.data[i] = self.data[i], self.data[l_child_i]   
      return
    if self.data[l_child_i] < self.data[r_child_i] and self.data[i] > self.data[l_child_i]:
      self.data[l_child_i], self.data[i] = self.data[i], self.data[l_child_i]
      self.heap_down(l_child_i)
    elif self.data[r_child_i] <= self.data[l_child_i] and self.data[i] > self.data[r_child_i]:
      self.data[r_child_i], self.data[i] = self.data[i], self.data[r_child_i]
      self.heap_down(r_child_i) 

  def add(self, v):
    self.data[self.length] = v
    self.heap_up(self.length)
    self.length += 1

  def delete(self):
    if not self.length:
      return
    self.length -= 1
    value = self.data[self.length]
    self.data[self.length] = None
    out = self.data[0]
    self.data[0] = value
    self.heap_down(0)  
    return out

  def get_parent(self, i):
    return (i - 1) // 2

  def get_l_child(self, i):
    return i * 2 + 1

  def get_r_child(self, i):
    return i * 2 + 2

mh = MinHeap()

mh.add(100)
mh.add(75)
mh.add(90)
mh.add(60)
mh.add(55)
mh.add(40)
mh.add(78)
mh.add(17)
mh.add(19)

print(mh.data)
print(mh.data[0])
print(mh.delete())

print(mh.data)
mh.add(58)

print(mh.data)
