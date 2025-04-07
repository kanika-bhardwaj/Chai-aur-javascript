//Immediately invoked function expression (IIFE)
//name IIFE
(function chai(){
    console.log("DB Connected");
})();//this terminator is very important

//unnamed IIFE
((name)=>{
    console.log(`try with arrow with ${name}`);
})('Kanika');

// to avoid pollution from global scope we use this

