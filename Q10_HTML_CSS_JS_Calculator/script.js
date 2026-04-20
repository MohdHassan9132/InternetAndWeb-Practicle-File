function displayValue(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
