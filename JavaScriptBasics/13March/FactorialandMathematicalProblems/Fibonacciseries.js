let N = 10;

let first = 0;
let second = 1;

for (let i = 1; i <= N; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}