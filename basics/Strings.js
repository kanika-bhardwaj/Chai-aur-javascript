const name="Kanika"
const repocount=8
console.log(name+repocount+"Value");//not recommended
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);//string interpolation

const game=new String('my-ga-me')
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(3));
console.log(game.indexOf('m'));

const newname=game.substring(0,3);//3 is not included
console.log(newname);

const ano=game.slice(-6,2);
console.log(ano);

const info="   My name is kanika  ";
console.log(info);
console.log(info.trim());

const url="https://kanika.com/kanika%20bhardwaj"

console.log(url.replace('%20','-'));
console.log(url.includes('kanika'));
console.log(url.includes('ashu'));

console.log(game.split('-'));
