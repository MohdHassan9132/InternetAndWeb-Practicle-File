var number = parseInt(prompt("Enter a number:"));
var factorial = 1;

for (var i = 1; i <= number; i++) {
    factorial = factorial * i;
}

document.write("Factorial of " + number + " = " + factorial);
