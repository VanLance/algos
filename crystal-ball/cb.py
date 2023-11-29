from math import sqrt, floor

def linear_search(floors, i):
  while i < len(floors):
    if floors[i] == True:
      return i
    i += 1

def crystal_ball(floors) -> int:
  low, sr = 0, floor(sqrt(len(floors)))
  while sr <= len(floors):
    if floors[sr] == True:
      return linear_search(floors, low)
    low = sr
    sr += sr
  return -1

print(crystal_ball([False,False,False,False,False,False,False,False,False,True,True,True,True,True,True,True,True,True]))
print(crystal_ball([False,False,False,False,False,False,False,False,False]))
print(crystal_ball([False,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True,True]))