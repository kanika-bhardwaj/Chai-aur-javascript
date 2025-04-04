function say(){
    console.log("Kanika");
}
// say();
function addnums(num1,num2){
    // let res=num1+num2; //res is limited till the function ends-->scope of any element of function is limited to function body
    // return res;

    return num1+num2;
}
const res=addnums(1,2);//3
// console.log(res);
addnums(1,"4")//14
addnums(3,null);//3

function loginusermssage(username="sam"){
    if(!username){
        console.log("Please enter username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginusermssage("Kanika"));//kanika just logged in
// console.log(loginusermssage())//sam just logged in

// ... rest operator considers all the elements
function calccarprize(...num1){
    return num1;
}
console.log(calccarprize(200,300,500));//return an array of all inputs
const user={
    username:"Kanika",
    price:199,
}
function handleobj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobj(user);
handleobj({
    username:"Koka",
    price: 799,
})
const mynewarr=[200,400,100,3409];

function returnsecondval(getarray){
    return getarray[3];
}
console.log(returnsecondval(mynewarr))
console.log(returnsecondval([3,7,8,9]))