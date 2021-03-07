x = 1; // Numbers.
x = 0.01; // Numbers can be integers or reals.
x = "hello world"; // Strings of text in quotation marks.
x = 'JavaScript'; // Single quote marks also delimit strings.
x = true; // A Boolean value.
x = false; // The other Boolean value.
x = null; // Null is a special value that means "no value."
x ? console.log("null: true"): console.log("null: false");
x = undefined; // Undefined is another special value like null.
x ? console.log("undefined: true"): console.log("undefined: false");

// JavaScript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map.
let book = {
  topic: "Javascript",
  edition: 7
};
// Access the properties of an object with . or []:
console.log("book.topic: %s", book.topic);
console.log("book['topic']: %s", book["topic"]);
book.author = "Flanagan"; // Create new properties by assignment.
book.contents = {}; // {} is an empty object with no properties.

// Conditionally access properties with ?. (ES2020):
console.log("book.contents?.ch01?.sect1: %s", book.contents?.ch01?.sect1); // => undefined: book.contents has no ch01 property.

let primes = [2,3,5,7];
primes.length
primes[primes.length - 1] // the last element of the array
primes[4] = 9; // Add a new element by assignment
primes[4] = 11; // Alter an existing element by assignment

// Arrays and objects can hold other arrays an objects
let points = [
  {x: 0, y: 0},
  {x: 1, y: 1}
];
let data = {
  trial1: [[1,2], [3,4]],
  trial2: [[2,3], [4,5]]
};
