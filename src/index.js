document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");


  const renderTodoItem = function (e) {
    e.preventDefault();
    const todoItemInput = document.querySelector("#new-task-description").value;
    const todoList = document.querySelector("#tasks");
    const item = document.createElement("li");
    item.textContent = todoItemInput;

    todoList.prepend(item);


    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Del";
    item.append(deleteBtn);
    const delTodo = function () {
      item.remove()
    };
    deleteBtn.addEventListener("click", delTodo);
  };

  form.addEventListener("submit", renderTodoItem);
});