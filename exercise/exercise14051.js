/*
1. formatting phone number
    input = "1234567890"
    output = "(123) 456-7890"


    input = "4255551212"
    input = "(425) 555-1212"


2. pig latin
    input ="Pig latin is cool"
    output = "igPay atinlay siay oolcay"

    */


/*function formatPhoneNumber(input) {
        if (input.length !== 10 || !/^\d{10}$/.test(input)) {
            throw new Error("Input must be a string of exactly 10 digits.");
        }
        
        const areaCode = input.slice(0, 3);
        const firstPart = input.slice(3, 6);
        const secondPart = input.slice(6);
    
        return `(${areaCode}) ${firstPart}-${secondPart}`;
    }
    
    // Example usage:
    const input1 = "1234567890";
    const output1 = formatPhoneNumber(input1);
    console.log(output1); // (123) 456-7890

    const input2 = "4255551212";
    const output2 = formatPhoneNumber(input2);
    console.log(output2); // (123) 456-7890
    

    function pigLatin(input) {
        // Split the input string into an array of words
        const words = input.split(' ');
    
        // Define a function to convert a single word to Pig Latin
        function convertWord(word) {
            // If the word starts with a vowel, just append "ay" to the end
            if (/^[aeiou]/i.test(word)) {
                return word + 'ay';
            }
            // If the word starts with a consonant, move the first letter to the end and append "ay"
            const firstLetter = word[0];
            return word.slice(1) + firstLetter + 'ay';
        }
    
        // Map each word to its Pig Latin equivalent
        const pigLatinWords = words.map(convertWord);
    
        // Join the Pig Latin words back into a single string
        return pigLatinWords.join(' ');
    }
    
    // Example usage:
    const input = "Pig latin is cool";
    const output = pigLatin(input);
    console.log(output); // "igPay atinlay siay oolcay" */

function formatPhoneNumber(input){
    let format = "(***) ***-****"

        for (let i = 0; 1 < input.length; i++){
            format = format.replace("*", input.charAt(i))
            //console.log(format)

        }

        return format
}

    console.log(formatPhoneNumber("1234567890"))


function myFunc(input) {
    let res = []

    input.split(" ").forEach(item=>{
        res.push(item.slice(1) + item.charAt(0) + "ay")
    })

    return res.join(" ")
}

console.log(myFunc("Pig latin is cool"))