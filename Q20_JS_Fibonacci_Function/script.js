function fibonacci(n) {
    var first = 0;
    var second = 1;
    var result = first + " " + second;

    for (var i = 3; i <= n; i++) {
        var next = first + second;
        result += " " + next;
        first = second;
        second = next;
    }

    return result;
}

var n = parseInt(prompt("Enter number of terms:"));

if (n === 1) {
    document.write("0");
} else if (n === 2) {
    document.write("0 1");
} else {
    document.write(fibonacci(n));
}
