//* adicionar a funcao de click no btn
//* criar a funcao de criar task
//* criar o li
//* adicionar a funcao de apertar enter para criar uma task
//* criar funcao de limpar input e manter focado no input task depois de criar uma task nova
//* criar funcao de criar o btn apagar depois de criar uma task nova
//* criar funcao de apagar tasks
//* criar funcao de salvar tasks
//* converter as tasks em arrays e depois converter para um JSON e salvar no localstorage
//* converter as tasks de JSON para array e fazer a aparecer no DOM

const tasks = document.getElementById("tasks");
const taskBtn = document.getElementById("taskBtn");
const taskList = document.querySelector(".taskList");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createTask(textInput) {
  const li = createLi();
  li.innerHTML = textInput;
  taskList.appendChild(li);
  clearTask();
  createDeleteButton(li);
  saveTasks();
}

function clearTask() {
  tasks.value = "";
  tasks.focus();
}

function createDeleteButton(li) {
  li.innerHTML += " ";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Apagar";
  deleteBtn.setAttribute("class", "apagar");
  deleteBtn.setAttribute("title", "apagar essa tarefa");
  li.appendChild(deleteBtn);
}

function saveTasks() {
  const liTasks = taskList.querySelectorAll("li");
  const taskListArray = [];

  for (let task of liTasks) {
    let textTask = task.innerText;
    textTask = textTask.replace("Apagar", "").trim();
    taskListArray.push(textTask);
  }
  const tasksJSON = JSON.stringify(taskListArray);
  localStorage.setItem("tasks", tasksJSON);
}

(function showSaveTasks() {
  const tasks = localStorage.getItem("tasks");
  const tasksLists = JSON.parse(tasks);

  for (let task of tasksLists) {
    createTask(task)
  }
})();

taskBtn.addEventListener("click", () => {
  if (!tasks.value) return;
  createTask(tasks.value);
});

tasks.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!tasks.value) return;
    createTask(tasks.value);
  }
});

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    saveTasks();
  }
});
