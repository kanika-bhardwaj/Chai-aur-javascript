for (let index = 1; index <=10; index++) {
    const ele=index;
    if(ele==5){
        // console.log("5 is best num");
        
    }
    // console.log(ele);
}

for (let index = 1; index <=2; index++) {
    for (let j = 1; j <= index; j++) {
    //    console.log(j);      
    }
}

let myarr=[1,2,3,4,5,6];
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
}

//break and continue
for (let index = 1; index < 20; index++) {
    if(index==5){
        // console.log("detected 5");
        break;
    }
    // console.log(`value of i is ${index}`); 
}
for (let index = 1; index < 20; index++) {
    if(index==5){
        // console.log("detected 5");
        continue;
    }
    // console.log(`value of i is ${index}`); 
}

//while and do while loop4
//wont run if condition is false
let num=5;
while (num>0) {
    // console.log(num--);
    num--;
}

//always runs once even if consition is false
let num2=3;
do {
    console.log(num2+1);
} while (num2!=3);

