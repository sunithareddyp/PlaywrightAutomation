let num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {

    if (num % i === 0) {
        isPrime = false;
        break;
    }

}

if (isPrime) {
    console.log(num + " is a Prime number");
} else {
    console.log(num + " is NOT a Prime number");
}