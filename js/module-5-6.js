//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const name = prompt("What is your name?");
//   if (!name) {
//     alert("Enter your name");
//     return;
//   }

//   return callback(name);
// }
// const greet = (name) => alert(`Hello ${name}`);
// console.log(letMeSeeYourName(greet));

//TODO № 2 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   return callback(product);
// }

// const showProduct = (product) => product;

// console.log(makeProduct("fish", 200, showProduct));
// console.log(makeProduct("orange", 267, showProduct));


//TODO: № 9 на class ✅ ==============================
//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     getInfo() {
//         return `name: ${this.name}, type: ${this.type}`;
//     }

//     toFeed() {
//         return `feeding ${this.name}`;
//     }
// }

// class Bird extends Animal {
//     constructor(name, type, food) {
//         super(name, type)
//         this.food = food;
//     }

//     getInfo() {
//         return `${super.getInfo()}, eats:${this.food}`;
//     }

//     toFeed() {
//         return `${this.name} is eating ${this.food}`;
//     }

// }

// class Mammal extends Animal {
//     constructor(name, type, age) {
//         super(name, type)
//         this.age = age;
//     }

//     getInfo() {
//         return `${super.getInfo()}, age:${this.age}`;
//     }

//     toOld() {
//         return `${this.name} is ${this.age} years old`;
//     }

// }


// class Zoo {
//     constructor() {
//         this.animals = [];
//     }

//     addAnimal(animal) {
//         this.animals.push(animal);
//     }

//     listAnimalsInfo() {
//         console.log("Zoo Animals: ");
//         this.animals.forEach((animal) => {
//             console.log(animal.getInfo());
//         })
//     }
// }

// const zoo = new Zoo();

// const eagle = new Bird("black eagle", "bird", "small animals");
// zoo.addAnimal(eagle);

// const cow = new Mammal("Buryonka", "korova", "8");
// zoo.addAnimal(cow);

// zoo.listAnimalsInfo();
