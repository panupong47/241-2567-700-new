/*
object + array
*/
let students = [
    {
        name: 'John',
        scores: 90,
        garde: 'A'
    },
    {
        name: 'Peter',
        scores: 75,
        garde: 'B'
    },
    { 
        name: 'Jane',
        scores: 60,
        garde: 'C'
    }
]

let student = students.find((s) => {
    if (s.name === 'Peter'){
        return true
    }
})

let dobleScores_students = students.map((s) => {
    s.scores = s.scores * 2
})

let hightScores_students = students.filter((s) => {
    if (s.scores > 100){
        return true
    }
})

console.log('hightScores_students:',hightScores_students);
console.log('student:',student);