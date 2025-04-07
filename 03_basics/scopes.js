//global scope
let a=10;
const b=20;
var c=30;
// console.log(a);
// console.log(b);
// console.log(c);
//block scope
if(true){
    let a=24;//24 inside but 10 outside
    let d=40;
    const e=70;
    var f=90;
}
// console.log(d);//error due to scope
// console.log(e);//error due to scope
// console.log(f);// prints
//this is why var is not ususally preffered

//closures-> best learnt after DOM Topic

function one(){
    const username="Kanika";
    function two(){
        const website="portfolio";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();
if(true){
    const username="Kanika";
    if(username==="Kanika"){
        const website=" youtube";
        console.log(username+website);
    }
    // console.log(website);//error
}
// console.log(username);//error

//*****interesting concept */
function adding(value){//can call this before declaration
    return value+1;
}
console.log(adding(5));
//cant call this above declaration
const addtwo=function(num){
    return num+2;
}
console.log(addtwo(5));