// function add(num1, num2) {
//     return num1 + num2;
//     console.log9('Hello');
// }

// 這樣寫就不會被覆寫
const add = function (num1, num2) {
    return num1 + num2;
}

let calc = add(1, 10);
console.log(calc);