// 1. Write the "new" operator as if it was implemented in JS.
function NEW(constructor, args) {
    let n = {'__proto__': constructor.prototype};
    //OR instead of let n =... :
    // n.__proto__ = constructor.prototype;
    constructor.apply(n, args);
    return n;

    // or instead of all upper:
    // return new constructor(...args);
}

function Person (name) {
	this.name = name;
}

Person.prototype.speak = function() { 
	console.log('Hello! ' + this.name);
}

var person = NEW(Person, ['Gena']);

person.speak(); // --> 'Hello';



// 2. Write the "instanceof" operator as if it was implemented in JS.
var Person = function(name) {
	this.name = name;
}

var Human = function(name) {
    this.name = name;
}

Person.prototype = new Human();

function INSTANCEOF(object, constructor) {
    if (object.__proto__ === constructor.prototype) {
        return true;
    } else if (object.__proto__ !== null) { //для выхода из рекурсии если прошли __proto__ самого последнего родителя
        return INSTANCEOF(object.__proto__, constructor);
    } else return false;
}

person = new Person( 'Alexis' );
console.log (INSTANCEOF( person, Human )); // --> true