const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todoNumber = document.querySelector(".todo-number");
const selectType = document.querySelector(".type-product");
const selectorValue = selectType[selectType.selectedIndex].value;

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value + " x" + todoNumber.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //   const completedButton = document.createElement("button");
  //   completedButton.innerText = "Completed";
  //   completedButton.classList.add("complete-btn");
  //   todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerText = "Trash";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
