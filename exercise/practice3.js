/*
Create a function to convert roman numeral to integer.
Example 1:
    Input: s = "III”
    Output: 3
    Explanation: III = 3.

Example 2:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
    
Example 3:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

function romanNumber(num){
   const romanNumberMap = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
   }

   let total = 0
   let previousValue = 0

   for (let i = num.length - 1; i>=0; i--){
    const currentValue = romanNumberMap[num[i]]

    if (currentValue < previousValue){
        total -= currentValue
    } else{
        total += currentValue
    }

    previousValue = currentValue
   }
return total
}

console.log(romanNumber("III"))
console.log(romanNumber("LVIII"))
console.log(romanNumber("IV"))

//other way

function romNom(s){
    let result = 0
    let roman = { I:1,V:5,X:10,L:50,C:100,D:500,M:1000}

    for(let i = 0; i < s.length; i++) {
        let currentNumber = roman[s.charAt(i)]
        let nextNumber = roman[s.charAt(i+1)]

        if (currentNumber < nextNumber){
        result -= currentNumber
        } else {
            result += currentNumber
        }
    }
    return result
}

console.log(romNom("IV"))
console.log(romNom("IX"))
console.log(romNom("XIX"))