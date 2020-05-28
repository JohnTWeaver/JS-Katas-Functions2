function add(x, y) {
    return x + y;
}
console.log("Addition Function")
console.log(add(4, 3))
console.log(add(8, 10))

function multiply(x, y) {
    let a = 0;
    for (let i = 0; i < y; i++) { a = add(a, x) }
    return a;
}
console.log("Multiply Function")
console.log(multiply(4, 3));
console.log(multiply(7, 10));





function power(x, y) {
    let a = 1;
    for (let i = 0; i < y; i++) { a = multiply(a, x) }
    return a;
}
console.log("POWER Function")
console.log("power " + power(2, 8));
console.log("power " + power(2, 5));
console.log("power " + power(3, 4));

function factorial(x) {
    let a = 1;
    for (let i = x; i > 0; i--) { a = multiply(a, i) }
    return a;
}
console.log("Factorial Function")
console.log(factorial(5));
console.log(factorial(4));

function fibonacci(x) {
    console.log("Fibonoci Function")
      let array1 = [0,1];
      let previous = 0;
      let current = 1;
     while(current < x){
        array1.push(add(array1[current],array1[previous]))
        previous = current;
        current += 1;
    }
    return array1[x-1];
    //this function took me 3 hours i dont know why it was so hard
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));