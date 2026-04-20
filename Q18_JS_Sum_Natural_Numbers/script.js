var n = parseInt(prompt("Enter a positive number:"));
var sum = 0;

for (var i = 1; i <= n; i++) {
    sum = sum + i;
}

document.write("Sum of first " + n + " natural numbers = " + sum);
