// declare variable with type
let text: string = "Hello world!";
let age: number = 6;
console.log(text);


// any type, for communicating with legacy js things for example, rather not use
let blabla: any = "test";
blabla = 7;

// function with types
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}
