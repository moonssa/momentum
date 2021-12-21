const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    console.log(li);
    toDoList.appendChild(li);
    //localStorage.setItem(, newTodo);
};

function handleTodoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);