function testTuple() {
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  // Initialize it incorrectly
  // x = [10, 'hello']; // Error
}

// Declare a tuple type
export function tuplesApp() {
  testTuple();
}
