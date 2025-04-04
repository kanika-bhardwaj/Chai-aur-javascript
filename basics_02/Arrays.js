const myarr=[1,2,3,5,true,'Kanika'];//resizeable->can have different datatypes
// console.log(myarr);
//arrays create shallow copies i.e. they share same reference points
const family=new Array(12,13)
// console.log(family[0]);

//array methods
myarr.push(6);
myarr.pop();
// console.log(myarr);
myarr.unshift(9);//not good for optimized cases
// console.log(myarr);

myarr.shift()//removes first element

//includes() , indexOf(idx), 
const newarr=myarr.join();
// console.log(myarr);
// console.log(newarr);
// console.log(typeof myarr);
// console.log(typeof newarr);

//slice and splice

//slice just shows the part of array and excludes end index mentioned
//splice removes that part of array and includes the end index as well



