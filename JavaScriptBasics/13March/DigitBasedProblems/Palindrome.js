let num = 121;
let original = num;
let reversed = 0;

while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
}

if (original === reversed) {
    console.log("Palindrome number");
} else {
    console.log("Not a palindrome");
}