import readlineSync from 'readline-sync';

 const perName = () => { 
const name = readlineSync.question('May i have your name?');
console.log(`Hello,  ${name}`);
}

export default perName;