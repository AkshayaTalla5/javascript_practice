// console.log("Hello akshaya");
// alert("hello akshaya");
console.table({name: "akshaya", age: 20});
console.clear();
// variables
// using let keyword 
let name = 'akhi';
console.log(name);
// using var keyword
var names = "akshaya";
names = "sir";
console.log(names);
// using const keyword
const name1 ="vidya";
console.log(name1);
// finding data datatype
console.log(typeof name1);

// task(variables)
let name2 = "rosi";
let WhatDoYouWannaBecomeInYourLife = "programmer";
let gender = "female";
console.log(typeof name2);
console.log(WhatDoYouWannaBecomeInYourLife);
console.log(gender);

// primitive types
// 1.number
let num = 10.54;
// finding data datatype
console.log(typeof num);
console.log(num);
//  basic math
let num1 = 2;
console.log(2 * 2);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 ** 2);
console.log(2 % 2);
// decrement and  incerement
let counter = 0;
counter++;
counter++;
counter++;
console.log(counter); 
let counter1 = 10;
counter1--;
counter1--;
counter1--;
console.log(counter1);

// task(arthematic operators)
let firstFavNum = 3;
let secondFavNum = 4;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

//  2.Boolean
let isTrue = true;
console.log(isTrue);
let isFalse = false;
console.log(isFalse);
let Nan = NaN;
console.log(Nan);

let number = 10;
console.log(number + undefined);   // output is NaN because the undefined is not a number so that will print the NaN

//falsy value : undefined, null, 0, NaN, false, ""
let notdefined = undefined;
console.log(notdefined);
let error = null;
console.log(error);

// task(boolean)
let isJsProgrammingLan = true;
let isJsHard = false;
let favnum = 13;
console.log(isJsProgrammingLan);
console.log(isJsHard);
console.log(favnum + undefined);

// Comparsion operators
// Comparsion operators there are 2 types of operators : 1. Relational 2. Equality  
// Relational operators
console.log(10 > 5);
console.log(50 < 100);
console.log(50 <= 100);
console.log(50 >= 100);
// Equality operators
//  strictly equal
console.log(10 === 10); // strictly equal operstor
console.log(10 !== 10); // loose equality operator
console.log(10 == 10); // strict non-equality operator
console.log(10 != 10); // loose non-equality operator

// task(comparison operators)
let firstFavNums = 13;
let secondFavNums = 2;
console.log(firstFavNums > secondFavNums);
console.log(firstFavNums < secondFavNums);
console.log(firstFavNums >= secondFavNums);
console.log(firstFavNums <= secondFavNums);
console.log(firstFavNums === secondFavNums);
console.log(firstFavNums == secondFavNums);  
console.log(firstFavNums !== secondFavNums);
console.log(firstFavNums != secondFavNums);

// 3 . String
let firstName = " Roshini  ";
console.log(firstName);
let lastName = "akshaya";
console.log(lastName);
// ->  1. contatenation
console.log(firstName + " " + lastName);
// another way of writing the concatenation
let fullName = firstName.concat(lastName)
console.log(fullName);

// -> 2. APPEND
firstName += "is a good girl";
console.log(firstName);

// -> 3. length
console.log(firstName.length);

//  -> 4. cases
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// -> 5. Silce
console.log(firstName.slice(0, 6));
console.log(lastName.slice(1,7));

// 6. split & join
console.log(firstName.split());
console.log(firstName.split(''));
console.log(firstName.split(" "));
console.log(firstName.split().join());

// 7. Includes
console.log(firstName.includes("A"));
console.log(firstName.includes("a"));
console.log(firstName.includes("Rosh"));

// 8. trim
let name3 = "    akhi   ";
console.log(name3.trim());

//back ticks
let fn = "akhi";
let ln  = "roshini";
let fullN = `${fn} ${ln} something`;
console.log(fullN);

// task(string)
let favActorFirstName = "sri";
let favActorLastName = "priya";
let fullnamefav = favActorFirstName + favActorLastName;
let uppercase = fullnamefav.toUpperCase();
console.log(favActorFirstName.concat(favActorLastName));
console.log(fullnamefav.toUpperCase());
let message = `my favorite actor is ${uppercase}`;
console.log(message);
message +=  ` her best actor in star tv`;
console.log(message);

// type converstion
let money = 50;
console.log(money);
console.log(typeof money);
let m = "50";
console.log(typeof m);

// converting string to number
let cash = "50";
cash = parseInt(cash);
console.log(typeof cash);
cash = +cash;
console.log(typeof cash);
