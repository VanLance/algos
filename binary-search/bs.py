def binary_search(haystack: list, needle: int) -> (bool, int):
  low, high = 0, len(haystack)
  while low < high:
    middle = (high + low) // 2
    current = haystack[middle]
    if current > needle:
      high = middle
    elif current < needle:
      low = middle + 1
    else: 
      return True, middle
  return False , 0

print(binary_search([1,2,3,4,5,6,7,8],1))
print(binary_search([1,2,3,4,5,6,7,8],2))
print(binary_search([1,2,3,4,5,6,7,8],8))
print(binary_search([1,2,3,4,5,6,7,8],7))
print(binary_search([1,2,3,4,5,6,7,8],10))
print(binary_search([1,2,3,4,5,6,7,8],3))
print(binary_search([1,2,3,4,5,6,7,8],6))