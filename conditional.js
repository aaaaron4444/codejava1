let age = 15

if (age >=17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enought to create an ID Card")
}

let grade = "B"

if (grade === "A") {
    console.log("Excellent Result")
} else if (grade === "B") {
    console.log("Great Result")
} else if (grade=== "C") {
    console.log("Average Result")
} else {
    console.log("Invalid Result")
}

console.log(grade == "A" ? "Excellent Result" : grade == "B" ? "Good Result" : "Invalid Grade")

let now = new Date();
let day = now.getDay();

switch (day) {
    case 0:
        console.log("Minggu");
        break;
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    case 4:
        console.log("Kamis");
        break;
    case 5:
        console.log("Jumat");
        break;
   default:
    console.log("Sabtu")
}


let z = ""

if (z) {
    console.log(true)
} else {
    console.log(false)
}


/* && = and
|| = or
! = not */

let str = "JavaScript"
console.log(str === "JavaScript" ? "I love JavaScript" : "Not JavaScript")