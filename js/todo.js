const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos=[];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function handleDeleteToDo(event){
    const li = event.target.parentElement;
    console.log(li);
    li.remove();
};

function paintToDo(newTodo){
//    toDos.push(newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌"
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    button.addEventListener("click",handleDeleteToDo);
    toDoList.appendChild(li);
//    saveToDos();
};

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}