#!/usr/bin/env node
import readlineSync from 'readline-sync';
import perName from '/Users/beslan/firstProject/frontend-project-44/src/cli.js';

console.log("Welcome to the Brain Games!");
const userName = perName();

const rndNumGame = () => {
    console.log ('Answer "yes" if the number is even, otherwise answer "no".');

let currentResult = 0;
    for (let i = 0; i<=4; i++){
let rndNum = Math.floor(Math.random() * 100) +1;
let rightAnswer = '';
if (rndNum %2 === 0){
    rightAnswer = 'yes'
}
 else {
rightAnswer = 'no'
 };
 

console.log(`Question: ${rndNum}`);
const userAnswer = readlineSync.question('Your answer');
if (userAnswer !== 'yes' && userAnswer !== 'no' ) {console.log(`Correct answer was ${rightAnswer} . 
 Let's try again ${userName} `); break;} 
else{ 
    if (userAnswer === rightAnswer) {
        console.log("Correct!"); 
        i++;
        currentResult++;
    }
    else {
        i++;
    }
   
}


}
if (currentResult === 3){
console.log (`Congratulations ${userName} !`);
}
else 
{
    console.log ('Try again');
}
}

rndNumGame();