// TODO: ЗАДАЧА 1 на LocalStorage со старой домашки  ====================================
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду
//  змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);
let interval = null;
stopBtn.disabled = true;

function onStart() {
  interval = setInterval(changeColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStop() {
  if (interval === null) {
    return;
  }

  clearInterval(interval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// TODO: ЗАДАЧА 2  на LocalStorage =========================================
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const checkbox = document.querySelector(".checkbox");
const bodyTheme = document.querySelector("body");
const key = "theme";
const darkTheme = "dark theme";
const lightTheme = "light theme";

const getTheme = localStorage.getItem(key);
if (getTheme === darkTheme) {
  bodyTheme.classList.add("dark");
  checkbox.checked = true;
}

if (getTheme === lightTheme) {
  bodyTheme.classList.add("light");
  checkbox.checked = false;
}

checkbox.addEventListener("click", () => {
  if (checkbox.checked === false) {
    localStorage.setItem(key, lightTheme);
    bodyTheme.classList.add("light");
    bodyTheme.classList.remove("dark");
  }

  if (checkbox.checked === true) {
    localStorage.setItem(key, darkTheme);
    bodyTheme.classList.add("dark");
    bodyTheme.classList.remove("light");
  }
});

// TODO: ЗАДАЧА 3 на LocalStorage =========================================
// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const form = document.querySelector("#task-form");
const listTask = document.querySelector("#task-list");
const input = document.querySelector('input[name="taskName"]');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", addTask);

function addTask(event) {
  event.preventDefault();
  const task = input.value.trim();
  if (task !== "") {
    tasks.push(task);
    input.value = "";

    renderTasks();
    saveTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  listTask.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.dataset.index = index;
    btn.addEventListener("click", deleteTask);

    li.appendChild(btn);
    listTask.appendChild(li);
  });
}

function deleteTask(event) {
  const taskIndex = event.target.dataset.index;
  tasks.splice(taskIndex, 1);
  renderTasks();
  saveTasks();
}

renderTasks();
