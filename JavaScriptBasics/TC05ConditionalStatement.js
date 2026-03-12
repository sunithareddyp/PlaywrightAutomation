//Conditional Statement

let condition = true, condition1 = false, condition2 = true, condition3 = false, condition4 = true
//If statement
if (condition) {
    // code to execute if condition is true
}


//If-else statement
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

//If-else if statement
if (condition1) {
    // code to execute if condition1 is true
} else if (condition2) {
    // code to execute if condition2 is true
} else if (condition3) { 
    // code to execute if condition3 is true
} else if (condition4) {
    // code to execute if condition4 is true
}
else {
    // code to execute if all conditions are false
}

//Select Browser Based on User Input
let browser = "Chrome"
if(browser === "Chrome") {
    console.log("You are using Chrome")
} else if(browser === "Firefox") {
    console.log("You are using Firefox")
} else if(browser === "Edge") {
    console.log("You are using Edge")
} else if(browser === "Safari") {
    console.log("You are using Safari")
} else {
    console.log("Browser not supported")
}

//Select Environment Based on User Input
let environment = "Production"
if(environment === "Development") {
    console.log("You are in Development Environment")
} else if(environment === "Staging") {
    console.log("You are in Staging Environment")
} else if(environment === "QA") {
    console.log("You are in QA Environment")
} else {
    console.log("Environment not supported")
}

//Switch Statement
switch (environment) {
    case "Development":
        console.log("You are in Development Environment")
        break;
    case "Staging":
        console.log("You are in Staging Environment")
        break;
    case "QA":
        console.log("You are in QA Environment")
        break;
    default:
        console.log("Environment not supported")
}  

//Days of Weeks
let day = 3
switch (day) {
    
    case 1:
        console.log("================================")
        console.log("Monday")
        //Find largest of 3 numbers
        let num1 = 10, num2 = 20, num3 = 30;
        let largest = num1;
        if (num2 > largest) {
            largest = num2;
        }
        if (num3 > largest) {
            largest = num3;
        }
        console.log("The largest number is: " + largest);

    case 2:
        console.log("Tuesday")
    case 3:
        console.log("Wednesday")
    case 4:
        console.log("Thursday")
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day")
}

