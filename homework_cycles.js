// 1.  Знайдіть суму всіх цифр від 1 до 100.
// let sum = 0;
// for (let i = 0; i<=100; i++) {
//   sum+= i;
// }
// console.log(sum);
//

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let arr = [1,2,3,4,5];
// for (let i = 0; i<arr.length; i++) {
//   console.log(arr[i]);
// }



// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
// let arr = [-1, 22, 3, 44, 5], max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
// }
// console.log(max);


// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера.

// let num, plus = 0, minus = 0, zero = 0;
//
// for (let i = 0; i < 8; i++) {
//   num = +prompt('Введіть число');
//   if (isNaN(num) == true) {
//     alert('Ввести потрібно число');
//   }
//   if (i===8) break;
//   if (num>0) {
//     plus++
//   } else if (num<0) {
//     minus++
//   } else {
//     zero++
//   }
// }
// alert(`Ви ввели ${plus} додатніх чисел, ${minus} від'ємних та ${zero} нулів`);



// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

// const number = 8;
// let result;
// for (let i = 1; i<=9; i++) {
//   result = number * i;
//   console.log(`${number} * ${i} = ${result}`)
// }




// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// let arr = [2, 5, 9, 15, 0, 4];
// for (let i =0; i<arr.length; i++){
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(`${arr[i]}`)
//   }
// }


// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

// let firstNumber, secondNumber, sign, result, question;
//
// do {
//   firstNumber = +prompt('Введіть перше число');
//   secondNumber = +prompt('Введіть друге число');
//   sign = prompt('Введіть знак');
//
//   switch (sign) {
//     case '+':
//       result = firstNumber + secondNumber;
//       break;
//     case '-':
//       result = firstNumber - secondNumber;
//       break;
//     case '*':
//       result = firstNumber * secondNumber;
//       break;
//     case '/':
//       result = firstNumber / secondNumber;
//       break;
//     default:
//       alert('Щось пішло не так');
//       break;
//
//   }
//   alert(`${firstNumber} ${sign} ${secondNumber} = ${result}`)
//   question = confirm(`Продовжити?`)
// } while (question);


