def binary_search(alist, needle, left=0, right =None):
  if not right:
    right = len(alist) - 1
  if left > right: 
    return -1
  middle = (left + right) // 2
  if alist[middle] == needle:
    return middle
  if needle > alist[middle]:
    left = middle + 1
  else:
    right = middle

  return binary_search(alist, needle, left, right)


print(binary_search([1,2,3,4,5,6,7,8],1))
print(binary_search([1,2,3,4,5,6,7,8],2))
print(binary_search([1,2,3,4,5,6,7,8],8))
print(binary_search([1,2,3,4,5,6,7,8],7))
print(binary_search([1,2,3,4,5,6,7,8],10))
print(binary_search([1,2,3,4,5,6,7,8],3))
print(binary_search([1,2,3,4,5,6,7,8],6))