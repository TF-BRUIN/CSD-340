var toDoList = [];

function addTextbox() {
    var q = document.getElementById("textboxInput").value;
    if (q != "") {
        toDoList.push(q);
        alert('"' + q + '" added to list.')
    }
}

function removeTextbox() {
    if (toDoList.length != 0) {
        l = toDoList.length - 1
        r = toDoList[l]
        toDoList.pop();
        alert('"' + r + '" removed from list.')
    }
}

const display = document.querySelector("display");

function displayAllItems() {
    document.getElementById('display').innerHTML = "";
    for (let i = 0; i < toDoList.length; i++) {
        document.getElementById('display').innerHTML += (i + 1) + ". " + toDoList[i] + "<br>";
    }
}



