let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());//better readability
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
let newone=new Date(2030,0,23);//0 because month sarts from 0 in js
let newone1=new Date("2030-04-23");
// console.log(newone1.toLocaleString());

let mytimestamp=Date.now();
// console.log(Math.floor(mytimestamp));
// console.log(newone1.getTime())//


let newDate=new Date();
console.log(newDate);
console.log(newDate.getDay());


//important method
newDate.toLocaleString('default',{
    weekday:"long"
})
