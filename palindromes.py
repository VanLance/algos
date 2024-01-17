def check_palindromes(strings):
  return len([word for word in strings if word == word[::-1]])

print(check_palindromes(['abcba']))


print('test'[::-1])