nums = [100, 88, 77, 65, 85, 17, 3]

def weak_sort(alist, lo, high):
  pivot_i = (lo + high) // 2 + 1
  pivot_v = alist[pivot_i]

  smaller = lo
  for i in range(lo, high+1):
    if i != pivot_i and alist[i] <= pivot_v:
      alist[i], alist[smaller] = alist[smaller], alist[i]
      smaller += 1
  alist[smaller], alist[pivot_i] = alist[pivot_i], alist[smaller]
  return smaller

def qs(alist, lo, high):
  if lo < high:
    pivot = weak_sort(alist, lo, high)
    qs(alist, lo, pivot - 1)
    qs(alist, pivot+1, high)


qs(nums, 0, len(nums) - 1)


print(nums)