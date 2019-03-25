function DOT (obj, prop) {
    if (obj === null || obj !== typeof obj || prop !== typeof String) {
        console.log ("Incorrect value! Try again");
    }
    else return 0;
}
             
studentAnna {
     name: "Anna",
     gender: "female",
     age: 18,
     listOfSubjects {
        russian: 5,
        english: 4,
        mathematics: 5,
        physics: 3,
        biology: 4,
        geography: 5,
        chemistry: 3
     }
     amountOfMooney: 100;
 }

studentHelen {
     name: "Helen",
     gender: "female",
     age: 19,
     listOfSubjects {
        russian: 4,
        english: 4,
        mathematics: 5,
        physics: 5,
        biology: 3,
        geography: 4,
        chemistry: 3
     }
     amountOfMooney: 200;
 }
             
studentPaul {
     name: "Paul",
     gender: "male",
     age: 18,
     listOfSubjects {
        russian: 4,
        english: 4,
        mathematics: 5,
        physics: 5,
        biology: 4,
        geography: 4,
        chemistry: 3
     }
     amountOfMooney: 300;
 }
             
studentHenry {
     name: "Henry",
     gender: "male",
     age: 17,
     listOfSubjects {
        russian: 3,
        english: 3,
        mathematics: 3,
        physics: 3,
        biology: ,
        geography: 5,
        chemistry: 4
     }
     amountOfMooney: 400;
 }
             
studentTommy {
     name: "Tommy",
     gender: "male",
     age: 18,
     listOfSubjects {
        russian: 5,
        english: 4,
        mathematics: 5,
        physics: 3,
        biology: 4,
        geography: 5,
        chemistry: 4
     }
     amountOfMooney: 500;
 }
             
studentSamuel {
   name: "Samuel",
   gender: "male",
   age: 19,
   listOfSubjects {
      russian: 3,
      english: 2,
      mathematics: 3,
      physics: 2,
      biology: 3,
      geography: 4,
      chemistry: 4
   }
   amountOfMooney: 600;
 }

//проверка пригодности для армии
function checkingSuitabilityForArmy (obj) {
  
  var minAgeForSuitabilityForArmy = 18;
  var maxAgeForSuitabilityForArmy = 27;
  if (obj.gender === "male" && 
      obj.age >= minAgeForSuitabilityForArmy && 
      obj.age < maxAgeForSuitabilityForArmy) {
    console.log (obj.name + ", is your subpoena.");
  } else if (obj.gender === "female") {
    console.log (obj.name + ", you are woman!");
  } else if (obj.gender === "male" &&
             obj.age < minAgeForSuitabilityForArmy) {
    console.log (obj.name + ", you are too young for the army now. Please, wait and feel free.");
  } else if (obj.gender === "male" && 
             obj.age >= maxAgeForSuitabilityForArmy) {
    console.log (obj.name + ", you are too old for the army. So you can join your life.");
  } else {console.log (obj.name + ", who are you?");}
}

//вычисление среднего балла
var gradePointAverage;
function countingGradePointAverage (obj) {
  
  gradePointAverage = (obj.listOfSubjects.russian + 
                           obj.listOfSubjects.english + obj.listOfSubjects.mathematics + obj.listOfSubjects.physics + obj.listOfSubjects.biology + obj.listOfSubjects.geogrphy + obj.listOfSubjects.chemistry)/7;
  return gradePointAverage;
}

//проверка прохождения студента на следующий курс
function checkingThePossibilityOfTransitionToTheNextTerm (obj) {
  
  var minGradePointAverage = 3.5;
  if (gradePointAverage < minGradePointAverage) {
    console.log (obj.name + ", you can't transit to the next term with such a grade point average.");
  } else {
    console.log (obj.name + ", congratulations! You go to the next term!");
    obj.amountOfMoney = obj.amountOfMoney + 100;
  }
}

