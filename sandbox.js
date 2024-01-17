function exampleFunction(arg = []) {
  arg.push(42);
  return arg;
}
console.log([]==[])
console.log(exampleFunction());  // Output: [42]
console.log(exampleFunction());  // Output: [42, 42]
