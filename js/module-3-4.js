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
