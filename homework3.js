function Calculator (){
    this.read = function ( ) {
        this.firstNumber = +prompt("Введите первое число" , 0)
        this.secondNumber = +prompt("Введите второе число" , 0)
    };
    this.sum = function () {
        return alert(`Сумма: ${this.firstNumber + this.secondNumber}`);
    };
    this.mul = function () {
        return alert(`Произведение: ${this.firstNumber * this.secondNumber}`);
    };
}

let calc = new Calculator();
calc.read();
calc.sum();
calc.mul();

function Human(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let John = new Human ("John", 18 , "male");
let Anna = new Human ("Anna", 24 , "female");
let Ben = new Human ("Ben", 8 , "male");

let human = [John, Anna, Ben];
function objSortAge(a, b) {
    return a.age - b.age
}

human.sort(objSortAge)
console.log(human)
