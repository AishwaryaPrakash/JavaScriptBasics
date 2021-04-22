console.clear()

//Concept 1 : undefined vs null
//=============================

//undefined
var x;
console.log(x);
console.log(typeof x);

//null
var b;
b = null;
console.log(b);
console.log(typeof b);

// == compares only values
// === compares values + data types

console.log( x == b) // true because undefined = true
console.log(2 == '2') // true because == compares only values
console.log(2 === '2') // false because though value is same, numeric data tyep NE to string data type
console.log( x === b) // false because though undefined = true, but data type is not same. 

//In JS false ==  blank value == 0
console.log(false == 0)
console.log(false == '')
console.log(0 == '')

//Concept 2 : var vs let vs const
//===============================

//var is global scope, hence you will have to create multiple variables which will use up more memory space.
// issues with var : hosting.
// hositing means : JS takes all variable declarations to top, before executing the code.

var name = 'salesforce'
if(5>3){
  name = 'aish'
}
console.log(name);

// hositing example
console.log(age) // this will return undefined, because the line var age will be moved to top.
var age = '25'

// let was introduced in ES6.
// solves the hositing problem.
// let is blocked scope
// let can be updated, but not redeclared.


