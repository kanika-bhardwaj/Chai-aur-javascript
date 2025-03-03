//primitive
// String, number, boolean, null, undefined, symbol, BigInt
//JS is a dynamically typed language
const score=100
const fscore=90.8
const logged=false
let email;
const id=Symbol('123')
const anoid=Symbol('123')
console.log(id)
console.log(id==anoid)
const biggie=2343454497n

//non-primitive(reference type)
//Array, Objects, Functions

const hero=["Shaktiman","superman","smthng"];
let myObj={
    name: "Kanika",
    age: 22,
}
const myfunc=function(){
    console.log("Hello");
}
console.log(typeof myObj)
