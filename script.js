// Objects and Arrays Methods
// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// User shakillantirish qancha user yaratilishi so'raladi va uni qiymatlari niham kiritishi kerak misol ism yosh location;

// let userCount = +prompt(`How many users do you want to build up?`);

// const collectUsersInfo = (userCount) => {
//     let arr = [];
//     for (let i = 0; i < userCount; i++) {
//         let obj = {};
//         let name = prompt(`Enter user's name`);
//         obj.name = name;
//         let age = +prompt(`Enter user's age`);
//         obj.age = age;
//         let country = prompt(`Enter user's nationality`);
//         obj.country = country;
//         let careerPath = prompt(`Enter user's career path`);
//         obj.careerPath = careerPath;
//         arr.push(obj);
//     }
//     return arr;
// }

// console.log(collectUsersInfo(userCount));










// Constructor function example ----------------------------------------------------
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     };
// }

// const person1 = new Person('Alice', 30);
// console.log(person1);  -----------------------------------------------------------



// TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||| 
// Task 2 is needed to be checked to verify!!!
// constructor function da user shakillantirish ism yosh va qolgan malumotlar bo'lish kerak
// va enga kamida 2 ta method bo'lishi kerak;


// const getThePersonInfo = () => {
//     function Person(ism, yosh, mamlakat, soha, universitet) {
//         this.name = ism;
//         this.age = yosh;
//         this.nationality = mamlakat;
//         this.fieldOfStudy = soha;
//         this.graduatedFrom = universitet;
//         this.allInfo1 = function () {
//             return `My name is ${this.name}, ${this.age} years old one from ${this.nationality} graduated from ${this.graduatedFrom}.`
//         }
//         this.allInfo2 = function () {
//             return `I have born in ${2024 - this.age}, so now I am ${this.age} years old. I completed the ${this.fieldOfStudy} course at ${this.graduatedFrom}`
//         }
//     }
//     const person1 = new Person('Abdulaziz', 18, 'Uzbekistan', 'Computer Science', 'Swarthmore College');
//     const person2 = new Person('Muhammadjon', 18, 'Uzbekistan', 'Accounting & Business', 'Westminister University in Tashkent');
//     return person1.allInfo1();
// }

// console.log(getThePersonInfo());

















// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// function yozing va array ichidagi userlar maoshini hisoblovchi algaritm yozing;


// This function finds the total monthly salary of all the three employees given;
// const findTheMonthlySalary = () => {
//     let monthlySalary = 0;
//     let employeeInfo = [
//         { name: 'Jude', age: 20, dailySalary: 500, nationality: 'England'},
//         { name: 'Mbappe', age: 25, dailySalary: 700, nationality: 'France'},
//         { name:  'Vini', age: 24, dailySalary: 600, nationality: 'Brasil'},
//     ];
//     for (let i = 0; i < employeeInfo.length; i++){
//         monthlySalary += employeeInfo[i].dailySalary * 30; // employeeInfo[i].dailySalary == 500, 700, 600
//     }
//     return monthlySalary;
// }

// console.log(findTheMonthlySalary());




// Using constructor function to find the total monthly salary of all the three employees given;
// function Employee(name, age, dailySalary, nationality) {
//     this.name = name;
//     this.age = age;
//     this.dailySalary = dailySalary;
//     this.nationality = nationality;
// }
// const employee1 = new Employee('Jude', 20, 500, 'England');
// const employee2 = new Employee('Mbappe', 25, 700, 'France');
// const employee3 = new Employee('Vini', 24, 600, 'Brasil');

// let monthlySalary = 0;
// monthlySalary += (employee1.dailySalary * 30) + (employee2.dailySalary * 30) + (employee3.dailySalary * 30);

// console.log(monthlySalary);


// console.log(employee1);
// console.log(employee2);
// console.log(employee3);









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2 ta object ni solishtirib ko'ring yani ichidagi qiymatlari bo'lsa true yoki false va bu key ga nisbatan tekshiriladi 

// const findTheKeys = () => {
//     let obj1 = {
//         name: 'Abdulaziz',
//         age: 18,
//         nationality: 'Uzbekistan'
//     };

//     let obj2 = {
//         name: 'Abdulaziz',
//         age: 18,
//         nationality: 'Uzbekistan'
//     }

//     keys1 = Object.keys(obj1); // Object.keys bu yerda ikkita objectni keylarini arrayga joylab beradi;
//     keys2 = Object.keys(obj2); // ya'ni [name, age, nationality] 

//     if (keys1.length == keys2.length){
//         result =  true;
//     } else {
//         result = false;
//     }
//     return result;
// }

// console.log(findTheKeys());









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// inputNumber() funksiyasini yozing, kiritilgan input, raqam bo’lmagan qiymat bo’lguncha prompt orqali input so’rasin.
// Va kiritilgan raqamlarni bitta arrayga push qilib borsin.
// Qachonki raqam emas qiymat kirtilsa prompt ishdan to’xtab yig’ilgan raqamlar Arrayini return qilsin.


// const inputNumber = () => {

//     let arr = [];
//     while (true) {
//         let input = prompt(`Son kiriting`);
//         arr.push(input);
//         if (isNaN(input) == true || input == null || input == ``) {
//             break;
//         }
//     }
//     return arr;
// }

// console.log(inputNumber());