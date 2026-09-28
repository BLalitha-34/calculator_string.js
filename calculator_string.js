let num1 = "20";
let num2 = "10";
let operator = "+";
let number1 = Number(num1);
let number2 = Number(num2);
let result;
if (operator === "+") {
    result = number1 + number2;
} 
else if (operator === "-") {
    result = number1 - number2;
} 
else if (operator === "*") {
    result = number1 * number2;
} 
else if (operator === "/") {
    result = number1 / number2;
} 
else {
    result = "Invalid Operator";
}
console.log("===== Calculator =====");
console.log("First Number : " + num1);
console.log("Operator     : " + operator);
console.log("Second Number: " + num2);
console.log("Result       : " + result);
OUTPUT:
===== Calculator =====
First Number : 20
Operator     : +
Second Number: 10
Result       : 30
