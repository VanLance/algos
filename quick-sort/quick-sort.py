nums = [100,88,77,55,33,22,75,58,1]

def quick_sort(alist, low, high):
  if low >= high:
    return
  idx = weak_sort(alist, low, high)

  quick_sort(alist, low, idx - 1)
  quick_sort(alist, idx + 1, high)


def weak_sort(alist, low, high):
  pivot = (high + low) // 2 + 1
  idx = low - 1
  print(idx, alist)
  for i in range(low, high + 1):
    if pivot != i and alist[i] <= alist[pivot]:
      idx += 1
      alist[i], alist[idx] = alist[idx], alist[i]
  idx += 1
  alist[idx], alist[pivot] = alist[pivot], alist[idx]
  return idx

quick_sort(nums, 0, len(nums)-1)
print(nums)