let number = 1200000 // 1.200.000
let numString = number.toString() // "1200000"
let result = ""
let counter = 0

for (let i = numString.length - 1; i >= 0; i--) {
    if (counter % 3 == 0 && counter > 0) { //kelipatan 3, diatas 0
        result = "." + result
    }

    result = numString.charAt(i) + result
    counter++
}

console.log(`Rp. ${result}`)