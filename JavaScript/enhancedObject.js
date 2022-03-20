var name = 'Tran Dung';
var age = 21;

const student = {
    name,
    age,
    getName() {
        return this.name; //Ngắn gọn thay vì getName:  function(){return this.name}
    }
}
console.log(student); //{ name: 'Tran Dung', age: 21 }
console.log(student.getName()); //Tran Dung

var fieldName = 'name';
var fielAge = 'age';

const teacher = {
    [fieldName]: "Cô giáo",
    [fielAge]: 25,
}
console.log(teacher); //{ name: 'Cô giáo', age: 25 }