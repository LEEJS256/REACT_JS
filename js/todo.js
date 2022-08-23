const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const toDOs = [];
const TODOS_KEY = "todos";
function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDOs));
}


function handleTodoSumbit(evnet) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    toDOs.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
    
}
function deleteToDoList(event){
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDoList);
    
    li.appendChild(span);
    li.appendChild(button);
    
    span.innerText = newTodo;

    toDoList.appendChild(li);
 
}

function sayhello(){
    console.log("U_YA");
}

toDoForm.addEventListener("submit",handleTodoSumbit);

const local_ToDos = localStorage.getItem(TODOS_KEY);
console.log(local_ToDos);
if(local_ToDos !== null){
    const parsedToDos = JSON.parse(local_ToDos);
    parsedToDos.forEach(sayhello);
}