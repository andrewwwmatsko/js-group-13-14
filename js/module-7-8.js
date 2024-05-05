//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME"
//має виводити значення з поля
//введення (дивіться на елементи в
//html-розмітці)

// const button = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// button.addEventListener("click", () => {
//   console.log(input.value);
// });

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const button = document.getElementById("swapButton");
// const leftInput = document.getElementById("leftSwapInput");
// const rightInput = document.getElementById("rightSwapInput");

// button.addEventListener("click", () => {
//     const rightValue = rightInput.value;
//     rightInput.value = leftInput.value;
//     leftInput.value = rightValue;
// })

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   const value = input.getAttribute("type");
//   console.log(value);
//   const toggleTypeInput = value === "password" ? "text" : "password";
//   input.setAttribute("type", toggleTypeInput);

//   const textBtn = btn.textContent;
//   const toggleTextBtn = textBtn === "Приховати" ? "Розкрити" : "Приховати";
//   btn.textContent = toggleTextBtn;
// }
