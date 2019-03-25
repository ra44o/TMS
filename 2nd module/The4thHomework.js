// function getName (greet) {
//     console.log(greet + ', ' + this.name)
// }

// // здесь прописан объект user 

// getName.call(user, 'Hello');
// var getUserName = getName.bind(user); //bind - создает ссылку на новую (т. е. он создаёт копию такой функции) функцию, поэтому лучше её вставлять в какую-нибудь переменную, которая станет функцией, а потом вызывать через эту функцию


var firstCourseStudens // todo -- array that consists of students objects

var genders = {
	MALE: 'male',
	FEMALE: 'female'
};

var MIN_VALID_YEAR_FOR_ARMY; // todo -- number
var MAX_VALID_YEAR_FOR_ARMY; // todo -- number

var MIN_AVERAGE_GRADE; // todo -- number;

var BENEFIT = 3.1415;

studentAnna = {
    id: 1070321501,
    name: "Anna",
    age: 20,
    gender: genders.FEMALE,
    course: 4,
    cashAmount: 100,
    grades: [
       {subject: 'russian', grade: 5},
       {subject: 'english', grade: 4},
       {subject: 'mathematics', grade: 5},
       {subject: 'physics', grade: 3},
       {subject: 'biology', grade: 4},
       {subject: 'geography', grade: 5},
       {subject: 'chemistry', grade: 3},
    ],
    getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}

studentHelen = {
    id: 1070321602,
    name: "Helen",
    age: 19,
    gender: genders.FEMALE,
    course: 3,
    cashAmount: 100,
    grades: [
        {subject: 'russian', grade: 4},
        {subject: 'english', grade: 4},
        {subject: 'mathematics', grade: 5},
        {subject: 'physics', grade: 5},
        {subject: 'biology', grade: 3},
        {subject: 'geography', grade: 4},
        {subject: 'chemistry', grade: 3}
    ],
    getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}

studentPaul = {
    id: 1070321704,
    name: "Paul",
    age: 18,
    gender: genders.MALE,
    course: 2,
    cashAmount: 100,
    grades: [
        {subject: 'russian', grade: 4},
        {subject: 'english', grade: 4},
        {subject: 'mathematics', grade: 5},
        {subject: 'physics', grade: 5},
        {subject: 'biology', grade: 4},
        {subject: 'geography', grade: 4},
        {subject: 'chemistry', grade: 3}
    ],
    getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}

studentHenry = {
    id: 1070321803,
    name: "Henry",
    age: 17,
    gender: genders.MALE,
    course: 1,
    cashAmount: 100,
    grades: [
        {subject: 'russian', grade: 3},
        {subject: 'english', grade: 3},
        {subject: 'mathematics', grade: 3},
        {subject: 'physics', grade: 3},
        {subject: 'biology', grade: 3},
        {subject: 'geography', grade: 5},
        {subject: 'chemistry', grade: 4}
    ],
    getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}

studentTommy = {
    id: 1070321606,
    name: "Tommy",
    age: 19,
    gender: genders.MALE,
    course: 3,
    cashAmount: 100,
    grades: [
        {subject: 'russian', grade: 5},
        {subject: 'english', grade: 4},
        {subject: 'mathematics', grade: 5},
        {subject: 'physics', grade: 3},
        {subject: 'biology', grade: 4},
        {subject: 'geography', grade: 5},
        {subject: 'chemistry', grade: 4}
    ],
    getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}

studentSamuel = {
    id: 1070321505,
    name: "Samuel",
    age: 21,
    gender: genders.MALE,
    course: 4,
    cashAmount: 100,
    grades: [
        {subject: 'russian', grade: 3},
        {subject: 'english', grade: 2},
        {subject: 'mathematics', grade: 3},
        {subject: 'physics', grade: 2},
        {subject: 'biology', grade: 3},
        {subject: 'geography', grade: 4},
        {subject: 'chemistry', grade: 4}
    ],
    getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}

/*
Student object from previous task
{
	id: number,
	name: 'string',
	age: 'string',
	gender: gender.param,
	course: number,
	cashAmount: number
	grades: [{subject: 'string', grade: number}],
	getAverageGrade: getAverageGrade,
	checkIfValidForArmy: checkIfValidForArmy,
	changeCashAmount: changeCashAmount
}
*/

/*
	StudentFactory should return a function that would use CLOSURE - сделать айдишник через замыкание (он должен увеличиваться через замыкание)
*/
function StudentFactory () {
    /*
        1. initiate COUNTER variable; // there is no need to name variables using uppercase, I just want to emphasize that it's example of variable's name  
        2. return an anon function that takes all params that Student constructor should take (step 5); 
        3. function that we return at step 2 should return NEW instance of Student with passed arguments to function at step 2;
    
        4. declare a constructor Student that should take following args -- name, age, gender, course, cashAmount, grades;
        5. Inside Student we assign agrs to PRIVATE variables with same name but with _ before name AND (!!!!) we assign _id variable that will be equal to counter variable
        6. increase COUNTER's value +1
        7. methods getAverageGrade, checkIfValidForArmy, changeCashAmount should be PUBLIC and work like it was before
    */

    const name = setName();
    const age = setAge();
    const gender = setGender();
    const course = setCourse();
    let cashAmount = setCashAmount();
    const grades = setGrades();

    function setName(nameOfStudent) {
        return this.name = nameOfStudent;
    }
    function setAge(ageOfStundet) {
        return this.age = ageOfStundet;
    }
    function setGender(genderOfStudent) {
        if (genderOfStudent === genders.MALE) {
            return this.gender = 'male';
        } else return this.gender = 'female';
    }
    function setCourse(courseOfStudent) {
        this.course = courseOfStudent;
    }
    function setCashAmount(cashAmountOfStudent) {
        return this.cashAmount = cashAmountOfStudent;
    }
    function setGrades(russian, english, mathematics, physics, biology, geography, chemistry) {
        const gradesArr = [];
        gradesArr.push(this.grades.value[0] = russian);
        gradesArr.push(this.grades.value[1] = english);
        gradesArr.push(this.grades.value[2] = mathematics);
        gradesArr.push(this.grades.value[3] = physics);
        gradesArr.push(this.grades.value[4] = biology);
        gradesArr.push(this.grades.value[5] = geography);
        gradesArr.push(this.grades.value[6] = chemistry);
        return gradesArr;
    }
}

/*example of Factory
function FactoryName () {
    return function (name) {
        return new ConstructorName(name);
    }
  
  function ConstructorName(name) {
  	// implementation
  }
}

var studentFactory = FactoryName();
var student1 = studentFactory('Grigory');
*/


var studentsPassedExams = getStudentsPassedExams(/*args*/);

var goodStudentsIds = studentsPassedExams.map(
	// todo implementation;
);


var excludedStudents = getExcludedStudents(/*args*/);
var studentsForArmy = getStudentsForArmy(/*args*/);

var secondGradeStudents = getStudentsForNextCourse(/*args*/);


function getAverageGrade () {
	// todo -- implementation
}

function checkIfValidForArmy() {
	// todo -- implementation
}

// function changeCashAmount should SET cashAmount of object to Number (!)
// 1) sum object's cashAmount with cashNumber
// 2) make number 2 points decimal
// 3) turn result of 2) calculation to Float and set result to cashAmount property
function changeCashAmount (cashNumber) {
	// todo implementation
}

function getStudentsPassedExams(students, minAverageGrade) {
	/*
	  todo -- filter all students (check for average grade only)
		return array
	*/
}

function getExcludedStudents(students, goodStudentsIds) {
	/*
	  todo -- filter all students (check if student's id exists in goodStudentsIds, use array.indexOf())
		return array
	*/
}

function getStudentsForArmy(students) {
	/*
	  todo -- filter excluded students array, get students that are valid for army
		return array;
	*/
}

function getStudentsForNextCourse(students, benefit) {
	/*
	  todo -- map passed exams students array
		1) set course to Plus one
		2) use each item's cashAmount from students array using it's changeCashAmount method (pass benefit variable);
		return NEW array;
	*/
}
