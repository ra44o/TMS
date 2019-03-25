var MIN_VALID_YEAR_FOR_ARMY = 18; 
var MAX_VALID_YEAR_FOR_ARMY = 27;

var genders = {
	MALE: 'male',
	FEMALE: 'female'
};

var BENEFIT = 3;

var MIN_AVERAGE_GRADE = 3.5;

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

var firstCourseStudents = [studentAnna, studentHelen, studentPaul, studentHenry, studentTommy, studentSamuel];

var studentsPassedExams = getStudentsPassedExams(firstCourseStudents);

var goodStudentsIds = studentsPassedExams.map(function(arrayItem) {
    return arrayItem.id;
});

var excludedStudents = getExcludedStudents(firstCourseStudents, goodStudentsIds);

var studentsForArmy = getStudentsForArmy(excludedStudents);

var secondGradeStudents = getStudentsForNextCourse(studentsPassedExams);

function changeCashAmount() {
    this.cashAmount = parseFloat((this.cashAmount + BENEFIT).toFixed(2));
    return this.cashAmount;
}

function getAverageGrade() {
    
    return parseFloat((this.grades.reduce((result, { grade }) => result + grade, 0) / this.grades.length).toFixed(2));
    
    /* можно более простым способом

    var sum = 0;
    for (var i = 0; i < this.grades.length; i++) {
        sum += this.grades[i].grade;
    }
    return (parseFloat((sum/this.grades.length).toFixed(2)));
    */
}

function checkIfValidForArmy() {
    return (this.gender === 'male' && this.age >= MIN_VALID_YEAR_FOR_ARMY && this.age < MAX_VALID_YEAR_FOR_ARMY);
}

function getStudentsPassedExams(students) {
	    
    return students.filter(function(arrayItem) {
        return (arrayItem.getAverageGrade() >= MIN_AVERAGE_GRADE);
    });
}

function getExcludedStudents(students, goodStudentsIds) {
	
    var _getExludedStudents = [];
    for (var i = 0; i < students.length; i++) {
        if (goodStudentsIds.indexOf(students[i].id) === -1) {
            _getExludedStudents.push(students[i]);
        }
    }
    return _getExludedStudents;
}

function getStudentsForArmy(students) {
	
    var _getStudentsForArmy = [];
    students.filter(function(arrayItem) {
        if (arrayItem.checkIfValidForArmy() === true) {
            _getStudentsForArmy.push(arrayItem);
        }
    });
    return _getStudentsForArmy;
}

function getStudentsForNextCourse(students) {
	
    return students.map(function(arrayItem) {
        arrayItem.course += 1;
        arrayItem.cashAmount = arrayItem.changeCashAmount();
        return arrayItem;
    });
}