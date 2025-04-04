//singleton-> object made from constructor-one of its own type
//literals dont make singleton constructors make singleton

const mysym=Symbol("key1");

const JSuser={
    "name 2":"Kanika",
    name:"Kanika",
    [mysym]:"mykey",
    age: 21,
    location: "Noida",
    isLogged: false,
    lastlogges: ["Monday","Saturday"],
};
// console.log(JSuser.age);
// console.log(JSuser["location"]);
// console.log(JSuser["name 2"]);
// console.log(JSuser[mysym]);

JSuser.age=22;//change will propagate
// console.log(JSuser["age"]);
// Object.freeze(JSuser);
JSuser.age=23;//change won't propagagte
// console.log(JSuser["age"]);
// Object.create -->singleton

JSuser.greeting=function(){
    console.log(`Hello JSUser, ${this.name}`);
}

console.log(JSuser.greeting());