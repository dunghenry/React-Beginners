function sum(...args) {//rest
    //args is array
    return args.reduce(function (total, item) {
       return total + item;
    });
}

console.log(sum(1, 2, 3, 4));

// Syntax
// function f(a, b, ...theArgs) {
  // ...
// }

//VD

function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a) //one
  console.log("b", b) //two
  console.log("manyMoreArgs", manyMoreArgs) //[ 'three', 'four', 'five', 'six' ]
}

myFun("one", "two", "three", "four", "five", "six");


