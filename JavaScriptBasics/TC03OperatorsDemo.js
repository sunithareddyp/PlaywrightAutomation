//1 - Arithmetic Operators - Done on Numbers
//Modulus Operator - gives the remainder of a division operation
//Exponential Operator - raises the first operand to the power of the second operand
//Increment (Post and Pre) - increases the value of a variable by 1
//Decrement (Post and Pre) - decreases the value of a variable by 1
//Addition, Subtraction, Multiplication, Division
let a = 10;
let b = 3;
console.log(a + b) //Addition
console.log(a - b) //Subtraction
console.log(a * b) //Multiplication
console.log(a / b) //Division
console.log(a % b) //Modulus - 1
console.log(a ** b) //Exponential - 1000 - 2 power 3 = 8 = 2 ** 3

console.log("================================")

let c = 5;
console.log(c) //5
let m = c++ //Post Increment  - Variable assignement happens first and then the increment happens  
console.log(m) //5
console.log(c) //6
let d = 5;
console.log(d) //5
let z = ++d //Pre Increment - Increment happens first and then the variable assignment happens
console.log(z) //6
console.log(d) //6


console.log("================================")


let e = 5;
console.log(e) //5
e-- //Post Decrement - Variable assignment happens first and then the decrement happens
console.log(e) //4
let f = 5;
console.log(f) //5
--f //Pre Decrement - Decrement happens first and then the variable assignment happens
console.log(f) //4


//2 - Assignment Operators - Used to assign values to variables
//=, +=, -=, *=, /=, %=, **=
let g = 10;

g = g+5;
g+=5;

//10**4 = 10*10*10*10 = 10000

console.log(g**=5) //= g = g**5 = 10**5 = 10*10*10*10*10 = 100000
condole.log(g+=10) //= g = g + 10 = 100000 + 10 = 100010
console.log(g-=5) //= g = g - 5 = 100010 - 5 = 100005
console.log(g*=2) //= g = g * 2 = 100005 * 2 = 200010
console.log(g/=5) //= g = g / 5 = 200010 / 5 = 40002
console.log(g%=3) //= g = g % 3 = 40002 % 3 = 0

