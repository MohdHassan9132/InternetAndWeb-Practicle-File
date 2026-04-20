var a = parseInt(prompt("Enter first value:"));
var b = parseInt(prompt("Enter second value:"));
var temp;

document.write("Before swapping: a = " + a + ", b = " + b + "<br>");

temp = a;
a = b;
b = temp;

document.write("After swapping: a = " + a + ", b = " + b);
