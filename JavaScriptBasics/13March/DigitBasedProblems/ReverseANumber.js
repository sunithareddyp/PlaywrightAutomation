let num = 1234;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;          // get last digit
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);    // remove last digit
}

console.log("Reversed number:", reversed);