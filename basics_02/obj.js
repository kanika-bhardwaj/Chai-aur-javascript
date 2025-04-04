// const insta=new Object();//singleton
const instauser={};
instauser.id="Kanika.0212";
instauser.name="Kanika";
instauser.isLoggedIn= false;

// console.log(instauser);
const regularuser={
    email:"kanikabhardwaj0632@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Kanika",
            lastname:"Bhardwaj",
        },
    },
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={2:"c",4:"d"};//assigns c to 2 on concatenation
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
// console.log(obj3);

const users=[
    {
        id:1,
        email:"k@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com",
    }
]
users[1].email;
// console.log(instauser);
// console.log(Object.keys(instauser));
// console.log(Object.values(instauser));
// console.log(Object.entries(instauser));
// console.log(instauser.hasOwnProperty('isLoggedIn'));

const course={
    cour_name:"BS Padhai",
    price:"777",
    cour_inst:"Kanika",
}
const{cour_inst: inst}=course;
console.log(inst);

//some react
// const navbar=({company})=>{

// }
// navbar(company="thathinglishcoder");

//JSON
// {
//     "name":"Kanika",
//     "course_name":"sb kuch pdhai",
//     "course_price":"Free"
// }

