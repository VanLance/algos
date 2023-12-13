function exampleFunction(arg = []) {
  arg.push(42);
  return arg;
}

console.log(exampleFunction());  // Output: [42]
console.log(exampleFunction());  // Output: [42, 42]
