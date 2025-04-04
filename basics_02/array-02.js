const heroes=["thor","ironman","spiderman"];
const dc=["Superman","flash","batman"];
// heroes.push(dc);
// 
// console.log(heroes[3][1]);

const allheros=heroes.concat(dc);
console.log(allheros);
const allnew=[...heroes,...dc];
console.log(allheros);

const ano=[1,2,3,[4,5,6],7,[8,9,[10]]];
const realano=ano.flat(Infinity);
console.log(realano);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Kanika"}));//interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
