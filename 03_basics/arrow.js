const user={
    username:"Kanika",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//this talks about current context
    }
}
// user.welcomeMessage();
// user.username="Bhardwaj";
// user.welcomeMessage();

// console.log(this);//empty {}

// function greentea(){
//     let username="Kanika";
//     console.log(this);
// }
// greentea();


// const chai=function(){
//     let usename="Kanika";
//     console.log(this.usename);
// }
// chai(); prints undefined

// const chai=()=>{
//     let usename="Kanika";
//     console.log(this);
// }
// chai();


//pure arrow function
//
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(1,2));

//implicit return
// don't use{} in arrow function
const addone=(num1)=>  num1+1;
//or
// const addone=(num1)=>  (num1+1);
//objects cant be returned without ()

console.log(addone(9));
