let word = "mamam"
let reverseword = "" //untuk menampung kata yang dibalik

//console.log(word.charAt(0)) // karakter ke 5 karena dimulai dari 0, bukan 1


for (let i = word.length - 1; i >= 0; i--) {
    //console.log(word.charAt(i))
    reverseword += word.charAt (i)
} if (reverseword === word) {
    console.log(`${word} is palindrome`)
} else {
    console.log(`${word} is not palindrome`)
}