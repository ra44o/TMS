function DOT (obj, prop) {
    if (!obj || typeof obj !== 'object') {
        console.log ("Incorrect value! The first argument must be an object. Try again!");
        return;
    }

    if (typeof prop !== 'string' || typeof prop !== 'number') {
        console.log ("Incorrect value! The second argument must be a string or a number. Try again!");
        return;
    }

    return obj[prop];
}
             
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

//проверка пригодности для армии
function checkingSuitabilityForArmy (obj) {
  
  var minAgeForSuitabilityForArmy = 18;
  var maxAgeForSuitabilityForArmy = 27;
  return (arr.gender === 'male' && arr.age >= minAgeForSuitabilityForArmy && arr.age < maxAgeForSuitabilityForArmy);
}

//вычисление среднего балла
var gradePointAverage;
function countingGradePointAverage (obj) {
  
  gradePointAverage = (obj.listOfSubjects.russian + 
                        obj.listOfSubjects.english + 
                        obj.listOfSubjects.mathematics + 
                        obj.listOfSubjects.physics + 
                        obj.listOfSubjects.biology + 
                        obj.listOfSubjects.geogrphy + 
                        obj.listOfSubjects.chemistry)/7;
  return gradePointAverage;
}

//ещё один способ вычисления среднего балла (более короткий вариант)
//function getAverageGrade (grades) {
   // const gradesArray = Object.values(grades);
    //return gradesArray.reduce((result, value) => result + value, 0) / gradesArray.length;
//}


//проверка прохождения студента на следующий курс
function checkingThePossibilityOfTransitionToTheNextTerm (obj) {
  
  var minGradePointAverage = 3.5;
  if (gradePointAverage < minGradePointAverage) {
    console.log (obj.name + ", you can't transit to the next term with such a grade point average.");
    if (checkingSuitabilityForArmy(obj) === true) {
      console.log (obj.name + ", you should repass exams as soon as possible, because you are valid for the army.");
    } else {
      console.log (obj.name + ", you would better repass the exams, otherwise you will be excluded.");
    }
  } else {
    console.log (obj.name + ", congratulations! You go to the next term!");
    obj.amountOfMoney = (obj.amountOfMoney + 3.864).toFixed(2);
    console.log ("You have " + obj.amountOfMoney + " dollars on your bank account.");
  }
}