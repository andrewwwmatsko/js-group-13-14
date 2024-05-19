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

})
