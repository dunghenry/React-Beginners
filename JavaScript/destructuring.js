const arr = ['JavaScript', 'Java', 'PHP'];

const [a, ...rest] = arr;
console.log(a, rest) //JavaScript [ 'Java', 'PHP' ]


const student = {
    name: 'Student',
    age: 21,
    address: 'Ninh Bình'
}

// const { name, ...objNew } = student

//console.log(name, objNew) //Student { age: 21, address: 'Ninh Bình' }


const teacher = {
    name: 'Teacher',
    age: 30,
    children: {
        name: 'Test'
    }
}

const { name, children: {name: nameChild} } = teacher; //nameChild là đặt lại tên
console.log(name, nameChild); //Teacher Test


function logger(...params) {
    console.log(params); //[ 1, 2, 3 ]

    console.log(arguments)// [Arguments] { '0': 1, '1': 2, '2': 3 }
}

logger(1, 2, 3)