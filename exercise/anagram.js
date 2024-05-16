function myFunc(str1, str2){
    const kata1 = str1.toLowerCase().split("").sort().join("")
    const kata2 = str2.toLowerCase().split("").sort().join("")

        console.log (kata1,kata2)
    return kata1 == kata2
}

console.log(myFunc("Anagram","Nagaram"))
console.log(myFunc("rat","car"))