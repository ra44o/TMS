studentAnna = {
    name: "Anna",
    gender: "female",
    age: 18,
    listOfSubjects: {
       russian: 5,
       english: 4,
       mathematics: 5,
       physics: 3,
       biology: 4,
       geography: 5,
       chemistry: 3
    },
    amountOfMoney: 100,
}

studentHelen = {
    name: "Helen",
    gender: "female",
    age: 19,
    listOfSubjects: {
        russian: 4,
        english: 4,
        mathematics: 5,
        physics: 5,
        biology: 3,
        geography: 4,
        chemistry: 3
    },
    amountOfMoney: 200
}

studentPaul = {
    name: "Paul",
    gender: "male",
    age: 18,
    listOfSubjects: {
       russian: 4,
       english: 4,
       mathematics: 5,
       physics: 5,
       biology: 4,
       geography: 4,
       chemistry: 3
    },
    amountOfMoney: 300
}

studentHenry = {
    name: "Henry",
    gender: "male",
    age: 17,
    listOfSubjects: {
       russian: 3,
       english: 3,
       mathematics: 3,
       physics: 3,
       biology: 3,
       geography: 5,
       chemistry: 4
    },
    amountOfMoney: 400
}

studentTommy = {
    name: "Tommy",
    gender: "male",
    age: 18,
    listOfSubjects: {
       russian: 5,
       english: 4,
       mathematics: 5,
       physics: 3,
       biology: 4,
       geography: 5,
       chemistry: 4
    },
    amountOfMoney: 500
}

studentSamuel = {
    name: "Samuel",
    gender: "male",
    age: 19,
    listOfSubjects: {
       russian: 3,
       english: 2,
       mathematics: 3,
       physics: 2,
       biology: 3,
       geography: 4,
       chemistry: 4
    },
    amountOfMoney: 600
 }

// 2. Moving all students to empty array via push(); 
const firstGradeStudents = [];
firstGradeStudents.push(studentAnna);
firstGradeStudents.push(studentHelen);
firstGradeStudents.push(studentHenry);
firstGradeStudents.push(studentPaul);
firstGradeStudents.push(studentSamuel);
firstGradeStudents.push(studentTommy);


// 1. Reassignment of object with subjects and grades to array of objects with subjects and grades
function getArrayOfGrades (obj) { 
    return Object.entries(obj.listOfSubjects).map(([key, value]) => ({subjName: key, grade: value}))
}
for (let i = 0; i < firstGradeStudents.length; i++) {
    firstGradeStudents[i].listOfSubjects = getArrayOfGrades(firstGradeStudents[i]);
}

//проверка пригодности для армии
function checkingSuitabilityForArmy (arr) {
  
    const minAgeForSuitabilityForArmy = 18;
    const maxAgeForSuitabilityForArmy = 27;
    return (arr.gender === 'male' && arr.age >= minAgeForSuitabilityForArmy && arr.age < maxAgeForSuitabilityForArmy);
}  



//Counting of average grade
function countingGradeAverage (arr) {
    return (arr.reduce((result, { grade }) => result + grade, 0) / arr.length).toFixed(2);
}
for (let i = 0; i < firstGradeStudents.length; i++) {
    console.log(firstGradeStudents[i].name + "'s average grade is " + countingGradeAverage(firstGradeStudents[i].listOfSubjects));
}

//проверка прохождения студента на следующий курс
function checkingThePossibilityOfTransitionToTheNextTerm (arr) {

    return arr.filter((item) => countingGradeAverage(item.listOfSubjects) >= 3.5);
}

let secondGradeStudents = checkingThePossibilityOfTransitionToTheNextTerm(firstGradeStudents);
secondGradeStudents.map(function(arrayItem) {
    delete arrayItem.listOfSubjects;
    arrayItem.amountOfMoney += 3;
    return arrayItem;
});
