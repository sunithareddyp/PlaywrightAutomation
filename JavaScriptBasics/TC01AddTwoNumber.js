//Comments in JS
//Single Line Comment
//Multi Line Comment

/*
Multiline
Nmdslkla
dskaklkds
*/

//Data Type in JS
//var
//const
//let

var a = 10; //Variable a is initialized
let b = 100;


var c = a + b;
console.log(c);
c=a-b
console.log(c);
c=a*b;
console.log(c);

var flag = true;

var demo1 = 93.93;
var demo1 ="re-declared";
console.log(demo1)

var demo = 3.6;
demo = "re-assigned";
console.log(demo)



//VAR

// 1. FUNCTION SCOPE { }
// 2. RE-DECLARED
// 3. RE-ASSIGNED

//FUNCTION


function operationOnTwoNumber() //Function Declaration
{
    var z = 938;
    console.log("I am in OperationOnTwoNumber   "+z)
}


function swapTwoNumber()
{
    var q = 10;
    var p = 15;
    let temp = q;
}

operationOnTwoNumber(); //Function call
operationOnTwoNumber(); //Function call
swapTwoNumber(); //Function call

//Void - If a function is not returning any value - It is considered as VOID


//LET
// 1. BLOCK SCOPE - { }
// 2. CANNOT BE RE-DECLARED
// 3. CAN BE RE-ASSIGNED


let age = 20;
age = "hello";

let salary = 5000;
salary = 15000;

if(false)
{
    let demo = 100;
    console.log(demo); 
}


function demodemodemo()
{
    let abc = 100;
    console.log("I am in function demodemodemo "+abc)
}

console.log("demo = "+demo);
demodemodemo();

//let, var or const
const pi = 3.15

