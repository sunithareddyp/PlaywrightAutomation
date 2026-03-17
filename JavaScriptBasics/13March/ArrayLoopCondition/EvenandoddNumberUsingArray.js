let arr = [10, 15, 22, 33, 40, 55];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }

}

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);