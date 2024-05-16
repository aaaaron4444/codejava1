/*var data = "abc"
let word = "123"
const name = "Andi"



var a = 1
let b = 2

{
    var a = 3
    b = 4
}

console.log(a)
console.log(b)

const arr = [1,2,3]

arr.push(4)

//console.log(str)
//console.log(num)


let str = "Hello World"
var num = 10

let multiple = (a,b)=>{
    return a*b
}

console.log(2*"a")
console.log(10+true) //true = 1 false = 0

console.log(true*true)

let i = 5

console.log(i++)
console.log(i)

console.log(1+null)*/


function myFunc(input){
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let n = 0 

    for (let i = 0; i<input.length; i++){
        n = alph.findIndex(item => item == input.charAt(i)) + n * 26
    }

    return n
}

console.log(myFunc("ABC"))