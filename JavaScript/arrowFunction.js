
// function logger() {
//     console.log("function declaration");
// }

// const expression = function () {
//     console.log("function expression");
// }

// const arrowFunction = (message) => console.log(message);

// logger();
// expression();
// arrowFunction("Message...");


// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// const obj = (a, b) => ({ a, b });
// console.log(obj('Tran Dung', 21))

// const myF = () => console.log(this); //window
// myF();


const car = {
    name: "BMW",
    price: 1000,
    // color: "black",
    getName() {
        return this.name;
    },
    getPrice: function () {
        return this;
    },
    getColor: () => {
        console.log(this.color, this); // undefined , window
    }
}
console.log(car.getName());
console.log(car.getPrice());
console.log(car.getColor());

///Note: arrow function ko có function construct
