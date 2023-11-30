def bubble_sort(alist):
  sorted, passes = False, 0
  while sorted == False:
    sorted = True
    for i, num in enumerate(alist[:len(alist) - (1+passes)]):
      if num > alist[i + 1]:
        alist[i], alist[i+1] = alist[i+1], num
        sorted = False

nums= [100,1,88,4,6,7,28]

bubble_sort(nums)

print(nums)