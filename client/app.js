const input = document.getElementById("input-box");
const todoContainer = document.getElementById("todos-container");
const container = document.getElementById("container");


input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTodo(); // Pressing enter on the keyboard after typing.
    }
});

function addTodo(e) {

    if (input.value == '') {
        alert("You Add must something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        todoContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    input.value = '';
    saveData();
}

todoContainer.addEventListener('click', function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem('data', todoContainer.innerHTML);
}

function showTask() {
    todoContainer.innerHTML = localStorage.getItem('data');
}

showTask();

