function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //spread
// expected output: 6

console.log(sum.apply({},numbers));
// expected output: 6


//Function.prototype.apply()
//Syntax
apply(thisArg)
apply(thisArg, argsArray)

// VD
const numbers1 = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers1);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers1);

console.log(min);
// expected output: 2


const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]


const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c', 'd'];
const arr3 = [...arr1, arr2];
console.log(arr3)