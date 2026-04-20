function sortArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

var numbers = [50, 10, 40, 20, 30];
document.write("Original Array: " + numbers + "<br>");
document.write("Sorted Array: " + sortArray(numbers));
