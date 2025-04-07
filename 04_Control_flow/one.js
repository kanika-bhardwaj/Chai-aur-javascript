// if(conditiontrue h){
    // to code execute kro
// }

// const userloggedin=true;
// if(userloggedin){
//     console.log("he is logged in");
// }
// const temperatur=25;

// //one or other
// if(temperatur<50){
//     console.log("go out");
// }else{
//     console.log("dont go");
// }

// //only one if true no else
// if(2=='2'){
//     console.log("equal");//prints
// }
// if(2==='2'){
//     console.log("equal");//dont print because not strict equal due to different data types
// }


// const score=250;
// if(score>100){
//     const power="Fly";
//     console.log(`user power:${power}`);
// }


// console.log(power);//gives error

// const bal=1999;
// // if(bal>500) console.log("You are amir");

// if(bal<500){
//     console.log("less than 500");
// }else if(bal<750){
//     console.log("less than 750");
// }else{
//     console.log("amiri huh");    
// }

const namethere=true;
const debitcard=true;
const creditcard=false;
if(creditcard || debitcard){ //OR
    console.log("Can buy course"); 
}
if(namethere && debitcard){ //AND
    console.log("buy course");
}else{
    console.log("something is missing?");
}

//Nullish coalescing operator (??): null endefined

let val1;
// val1=5??10;
// val1=null??10;//10
// val1=undefined??15;//15
val1=null??10??19;//10
console.log(val1);

//ternary operator
// condition?true code:false code

const iceteaprice=100;
iceteaprice<=80?console.log("affordable"):console.log("very mehnga");



