//write a code to check whether the number is prime or not
// 2, 3, 5,7, 11, 13, ... ; hanya punya 2 pembagi habis


let number = 5
let divider = 0

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divider++
    }
}


console.log(divider == 2 ? "Prime Number" : "Not Prime Number")

let nomor = 20

for (let i = 1; i <= nomor; i++) {
    if (nomor % i === 0) {
        divider++
    }
}

console.log(divider == 2 ? "Prime Number" : "Not Prime Number")