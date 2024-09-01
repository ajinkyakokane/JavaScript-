let score = "33abc"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //it will give NaN(not a Number) ,
// if score is null it will give 0 
//if score is undefine it will give NaN
// if boolean value it will give 1
// if string  value it will give NaN

// 33 => number
// 33abc =>NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Ajinkya" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => String