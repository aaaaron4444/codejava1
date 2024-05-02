let c = 60;
let f = 0;
f = (c * (9 / 5)) + 32;

console. log(f)


let n = 25
if (n% 2 == 0) {
    console.log("Even")
}
else if (n%2 != 0) {
    console.log("Odd")
}


let z = 7
if (z% 2 == 0) {
    console.log("Even")
}
else if (z%2 != 0) {
    console.log("Odd")
}


let x = 4; 
 
function factorial(n) { 
    let ans = 1; 
     
    if(x === 0)
        return 1;
    for (let i = 2; i <= x; i++) 
        ans = ans * i; 
    return ans; 
}
 
console.log(factorial(n));


const number = 10 //modulo - sisa bagi %,  n % 2 = 0 (even number), else odd number//

const result =  number % 2

console.log(result == 0 ? "Even Number" : "Odd Number")