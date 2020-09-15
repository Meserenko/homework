// 1. Проекспериментувати з типами даних.
//
// let num = 23, str = '23', string = 'something';
// console.log(num === str); // false
// console.log(num == str); // true
// console.log(num + str); // 2323
// console.log(num / string); // NaN
//
//
// let something;
// let secondSomething = null;
// console.log(something == secondSomething); // true
// console.log(null == null); // true
//


// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined.
// let uah = +prompt('Введіть кількість грн(Перевід в долар, євро, нафту, золото)'), usd, gold, brent;
// if (isNaN(uah) === true || uah <= 0) {
//   alert('Оу, щось пішло не так')
// } else {
//   usd = uah * 0.036;
//   eur = 0.03 * uah;
//   gold = uah / 1775.23;
//   brent = uah / 1111;
//   alert(`${uah} UAH - ${usd} USD, ${eur} EUR, ${gold.toFixed(3)} г золота, ${brent.toFixed(3)} barrel`);
// }




// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок!
// let sale,afterSale, price = +prompt("Введіть суму вашого замовлення.");
// if(price < 500) {
//   sale = 0.01 * price;
//   afterSale = price - sale;
//   alert(`З урахуванням знижки: ${afterSale} грн.`)
// } else if (price >= 500 && price <= 1000) {
//   sale = 0.05 * price;
//   afterSale = price - sale;
//   alert(`З урахуванням знижки: ${afterSale} грн.`)
// } else if (price > 1000){
//   sale = 0.1 * price;
//   afterSale = price - sale;
//   alert(`З урахуванням знижки: ${afterSale} грн. Та ще ви отримуєте сертифікат на 200 грн у подарунок `)
// }





// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал.
//
// let questionOne = prompt("Яка столиця України?").toLowerCase(),
//     questionTwo = +prompt("Скільки буде 2+2*2?"),
//     questionThree = prompt("Як по-англійськи буде слово 'круто'?").toLowerCase() ,
//     questionFour = prompt("Яка столиця Німеччини?").toLowerCase(),
//     questionFive = +prompt("Дано квадрат.Знайти периметр, якщо сторона дорівнює 5."),
//     score = 0;
//
// if (questionOne === 'київ') {
//   score++;
// }
//
// if (questionTwo === 6) {
//   score++;
// }
//
// if (questionThree === 'cool') {
//   score++;
// }
//
// if (questionFour === 'берлін') {
//   score++;
// }
//
// if (questionFive === 20) {
//   score++;
// }
//
// if(score === 5) {
//   alert(`Ого, всі відповіді правильні, ловіть ще один бонусний бал`)
//   score++
//   alert(`Ви набрали ${score} балів з 5 можливих)`)
// } else {
//   alert(`Ви набрали ${score} балів з 5 можливих`)
// }


// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри

// let num = prompt('Введіть 3-значне число');
//
// if (num && isNaN(number) == false && num.length == 3) {
//
//   let arr = num.split('');
//
//   if (arr[0] == arr[1] || arr[1] == arr[2] || arr[0] == arr[2]) {
//     alert(`Число містить однакові цифри`);
//   } else {
//     alert('В числі немає однакових цифр')
//   }
// } else {
//   alert('Ало, сказав ж 3-значне вводити!');
// }


// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

//
// let shift = prompt('Нажміть на кнопку в діапазоні від "1" до "="(по порядку)');
//
// switch (shift) {
//   case '1':
//     alert('При нажатті на це разом з шифтом вийде "!"');
//     break;
//   case '2':
//     alert('При нажатті на це разом з шифтом вийде "@"');
//     break;
//   case '3':
//     alert('При нажатті на це разом з шифтом вийде "#"');
//     break;
//   case '4':
//     alert('При нажатті на це разом з шифтом вийде "$"');
//     break;
//   case '5':
//     alert('При нажатті на це разом з шифтом вийде "%"');
//     break;
//   case '6':
//     alert('При нажатті на це разом з шифтом вийде "^"');
//     break;
//   case '7':
//     alert('При нажатті на це разом з шифтом вийде "&"');
//     break;
//   case '8':
//     alert('При нажатті на це разом з шифтом вийде "*"');
//     break;
//   case '9':
//     alert('При нажатті на це разом з шифтом вийде "("');
//     break;
//   case '0':
//     alert('При нажатті на це разом з шифтом вийде ")"');
//     break;
//   case '-':
//     alert('При нажатті на це разом з шифтом вийде "_"');
//     break;
//   case '=':
//     alert('При нажатті на це разом з шифтом вийде "+"');
//     break;
//   default:
//     alert('Сказав ж в діапазоні від "1" до "="');
// }
//




//7. Cтворити масив у якому буде 3 юзера описані як обєкти з такими полями - age, name, hobby (теж повинно бути масивом ).
//
// let arrayObjects = [
//
//    {
//      name: 'Oleg',
//      age:19,
//      hobby: ['basketball', 'voleyball']
//   },
//   {
//     name: 'Ivan',
//     age: 23,
//     hobby: ['movie', 'soccer']
//   },
//   {
//     name: 'Vasyl',
//     age: 43,
//     hobby: ['fishing', 'tenis']
//   },
// ];
// console.log(arrayObjects);
