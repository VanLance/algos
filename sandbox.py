def version_compare( version1, version2 ):
  v1_list = version1.split('.')
  v2_list = version2.split('.')
  for i in range(len(v1_list if len(v1_list) > len(v2_list) else v2_list )):
    if i >= len(v1_list):
      v1_list.append('0')
    elif i >= len(v2_list):
      v2_list.append('0')
    if int(v1_list[i]) > int(v2_list[i]):
      return 1
    elif int(v1_list[i]) < int(v2_list[i]):
      return -1
  return 0

print(version_compare('2', '2.0.0.0.1'), -1)
print(version_compare('2', '2.1'), -1)
print(version_compare('2.1.0', '2.0.1'), 1)
print(version_compare('2.10.0.1', '2.1.0.10'), 1)
print(version_compare('2.0.1', '1.2000.1'), 1)