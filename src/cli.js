import readlineSync from 'readline-sync';

 const perName = () => { 
const name = readlineSync.question('May i have your name?');
console.log(`Hello,  ${name}`);
return name;
}

export default perName;