// TODO: ЗАДАЧА 1 на LocalStorage со старой домашки  ====================================
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду
//  змінює колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// const startBtn = document.querySelector("[data-start]");
// const stopBtn = document.querySelector("[data-stop]");
// const body = document.querySelector("body");
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function changeColor() {
//   body.style.backgroundColor = getRandomHexColor();
// }

// startBtn.addEventListener("click", onStart);
// stopBtn.addEventListener("click", onStop);
// let interval = null;
// stopBtn.disabled = true;

// function onStart() {
//   interval = setInterval(changeColor, 1000);
//   startBtn.disabled = true;
//   stopBtn.disabled = false;
// }

// function onStop() {
//   if (interval === null) {
//     return;
//   }

//   clearInterval(interval);
//   startBtn.disabled = false;
//   stopBtn.disabled = true;
// }
