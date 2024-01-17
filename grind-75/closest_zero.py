matrix = [[0,0,0],[0,1,0],[1,1,1]]

def closest_zero(matrix, x, y, seen, dist = 0):
  if x < 0 or x > len(matrix) - 1 or y < 0 or y >= len(matrix[0]) - 1 or f'{x}{y}' in seen:
    return dist
  # print(x, y, seen)
  dist += 1
  if matrix[x][y] == 0:
     dist = 0
  seen.add(f'{x}{y}')
  down = closest_zero(matrix, x + 1, y, seen, dist)
  up = closest_zero(matrix, x - 1, y, seen, dist)
  right = closest_zero(matrix, x  , y + 1, seen, dist)
  left = closest_zero(matrix, x , y - 1, seen, dist)
  print('test')
  matrix[x][y] = min(down, up, right, left)
  return dist
  
print(closest_zero(matrix, 0,0, set()))
print(matrix)