// Create a variable called hello and inizialize it with an h1 tag with the message "Hello, World!".

const hello = <h1>Hello, World!</h1>;

// Write a function that receives a name argument and returns a h1 tag with the name variable appended to the "Hello, " string.

function Greeter(name) {
    return <h1>Hello, {name}</h1>
}

// Write a function that receives two parameters, a and b and returns the sum of them within an h2 tag.

function sum(a, b) {
    return <h2>{a+b}</h2>
}