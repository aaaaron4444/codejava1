class Student {
    constructor(name, email, birthdate, score) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.score = score;
    }
}

const student1 = new Student("Andi", "andi@gmail.com", "1995-01-01", 80)
const student2 = new Student("Cahyo", "cahyo@gmail.com", "1996-01-01", 87)
const student3 = new Student("Budi", "budi@gmail.com", "1997-01-01", 90)

const arrStudent = [student1, student2, student3]

//console.log(arrStudent)

//console.log(Math.max(1,2,3,4,5))

function convertAge(date){
    let birthdate = new Date(date).getTime()  //time epoch
    let now = new Date().getTime()
    let diff = now - birthdate
    let res = Math.floor(diff / (1000 * 60 * 60 * 24)/365) //pembulatan
    
    return res
}

//convertAge ("1995-01-01")

function calculate(arr) {
    let maxScore = Math.max(...arr.map(item => item.score))
    let minScore = Math.min(...arr.map(item => item.score))
    let avgScore = arr.map(item => item.score).reduce((a,b) => a+b)/arr.length

    let maxAge = Math.max(...arr.map(item => convertAge(item.birthdate)))
    let minAge = Math.min(...arr.map(item => convertAge(item.birthdate)))
    let avgAge = arr.map(item => convertAge(item.birthdate)).reduce((a,b) => a+b) / arr.length

    return {
        score: {
            max: maxScore,
            min: minScore,
            avg: avgScore,
        },

        birthdate: {
            max: maxAge,
            min: minAge,
            avg: avgAge,
        }
    }
}

console.log(calculate(arrStudent))