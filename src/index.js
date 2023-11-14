let form = document.getElementById("create-task-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = e.target["new-task-description"].value;
  let todos = document.createElement("li");
  let list = document.getElementById("tasks");
  todos.textContent = value;
  list.append(todos);
});
