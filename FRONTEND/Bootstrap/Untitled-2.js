// Example of var
var name = "Alice";
function sayHello() {
    var name = "Bob";
    console.log("Hello " + name); // Hello Bob
}
sayHello();
console.log(name); // Alice

// Example of let
let age = 30;
if (true) {
    let age = 25;
    console.log("Inside block: " + age); // Inside block: 25
}
console.log("Outside block: " + age); // Outside block: 30

// Example of const
const PI = 3.14159;
console.log("Value of PI: " + PI); // Value of PI: 3.14159

// Trying to reassign a const variable will throw an error
// PI = 3.14; // Uncaught TypeError: Assignment to constant variable.
