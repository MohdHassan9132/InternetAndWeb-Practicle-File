var student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};

var text = "{\n";
text += '  name: "' + student.name + '",\n';
text += '  age: ' + student.age + ",\n";
text += '  course: "' + student.course + '"\n';
text += "}";

document.getElementById("output").textContent = text;
