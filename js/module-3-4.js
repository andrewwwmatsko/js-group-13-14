//TODO: № 1  ============================================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallerNumber(numbers) {

//     let minNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < minNumber) {
//             minNumber = number;
//         }
//     }
//     return minNumber;
// }
// console.log(findSmallerNumber(numbers));

//TODO: № 2 =============================================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

/* function caclculateAverage() {
  const args = arguments;
  let sum = 0;
  let totalCount = 0;
  for (const arg of args) {
    if (typeof arg !== "number") {
      //   args.length -= 1;
      continue;
    }
    sum += arg;
    totalCount += 1;
  }
  return sum / totalCount;
}
console.log(caclculateAverage(1, "Привіт", 2, 20, 1));
 */

// //TODO: № 3 ==============================================================
// // напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumNumbers(numbers) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     newArray.push(numbers[i] + numbers[i + 1])
//   }
//   return newArray;
// }
// console.log(sumNumbers(someArr));

//TODO: № 4 ================================================================
// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true
// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// function foo(key, obj) {
// const keys = Object.keys(obj);
// return keys.includes(key);
// return Object.keys(obj).includes(key);
// return key in obj;
// }

// console.log(foo("name", obj));

//TODO: № 5 ==============================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {
//         obj[key] *= 2;
//       }
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));

//TODO: № 3 на this ✅ ==============================================
//Виправте помилки, щоб код працював

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//TODO: № 4 на this ✅==============================================
//Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
// }
// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };
// callAction(item.getQuatity.bind(item));

//TODO якщо що на замикання ✅ ==============================================
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const shef = makeShef("Ivan");
// const sushef = makeShef("Andrii");

// shef("sushi");
// shef("pizza");

// sushef("kebab");

//TODO: № 6 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

const courses = [
  {
    name: "Basic HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
  },
  {
    name: "Intermediate HTML+CSS",
    topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
  },
  {
    name: "Basic JavaScript",
    topics: [
      "VSCode",
      "Type system",
      "Loops",
      "Function",
      "Git",
      "Conditions",
      "Classes",
      "GitHub",
      "DOM",
    ],
  },
  {
    name: "Intermediate JavaScript",
    topics: [
      "VSCode",
      "NPM",
      "Bundlers",
      "Transpiling",
      "Git",
      "Promises",
      "AJAX",
      "GitHub",
    ],
  },
];

const allTopics = courses
  .flatMap((course) => course.topics)
  .filter((el, i, arr) => arr.indexOf(el) === i);

console.log(allTopics);
