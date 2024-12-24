let todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });
  render();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function createTodoComponent(todo, index) {
  const newDivEl = document.createElement("div");
  const newSpanEl = document.createElement("span");
  const delButton = document.createElement("button");
  newSpanEl.innerHTML = todo.title;
  delButton.innerHTML = "Delete";
  delButton.onclick = () => deleteTodo(index);
  newDivEl.appendChild(newSpanEl);
  newDivEl.appendChild(delButton);
  // document.querySelector("body").appendChild(newDivEl);
  return newDivEl;
}

function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i], i);
    document.querySelector("#todos").appendChild(element);
  }
}
