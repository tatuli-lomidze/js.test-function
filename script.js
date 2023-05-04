"use strict";

// 1)შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დ
// ააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sum1 (...numbers1) {
    let numbers1Sum = 0;
    for (let item1 of numbers1) {
        if (item1 > 0) {
            numbers1Sum +=item1;
        }   continue; }
        return numbers1Sum;
    
}

let result1 = sum1( 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result1)


// 2) ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sum(...numbers) {
    let numbersSum = 0;
    for (let item2 of numbers) {
    numbersSum += item2;
    }
    return numbersSum;
}

 let result2 = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
 console.log(result2)

// 3)let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
      
//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') 
//   თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

  
//   4)შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//   ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
  
//   5)დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და 
//   გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს 
//   - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd;
  


// 6) მოცემულია მასივი
// let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];


// for ორივე გზით და foreach-ის საშუალებით გამოიტანეთ მხოლოდ ის სიტყვებუ რონლის 
// სიმბოლოების რაოდენობდა მეტია 4 და მოიცავს ‘av’ სიმბოელობის tთანმიმდევრობას; - include უნდა გამოიყენოთ

let array6 = ['html', 'css', 'python', 'javascript', 'bootstrap'];

// foreach

array6.forEach(element => { if (element.length > 4 && element.includes("av")) {
    console.log(element);
}
    
});

// for loop

for (let item6 of array6) {
    if (item6.length > 4 && item6.includes("av")) {
        console.log(item6);
    }
}


// 7)მოცემულია მასივი:
let array = [1,2,3,4,5];

// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array7 = [1,2,3,4,5];
let reversedArray7 = []
for(let item7 = array7.length - 1; item7 >= 0; item7--) {
    let revArray = array7[item7]
    reversedArray7.push(revArray)

}
console.log(reversedArray7)


// 8) ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAge = (birthyear, yearnow) => {
    let age = yearnow - birthyear; 
    let ageResult = age > 18 ? "SRULWLOVANI" : "ARASRULWLOVANI";
    return ageResult;
 } 


let result8 = userAge(2020, 2023);
console.log(result8);