'use strict';

let score = 0;  
let user = prompt('what is your name?')
alert('HELLO '+ user)
alert('we going to play gussing game, Answer with yes or no. let us start.')

function question1(){
let v1= prompt('do you think I am an Engineer?')
v1=v1.toLowerCase();
if (v1==='yes'||v1==='y'){
alert('that\'s correct')
score++;
    
}else if(v1==='no'||v1==='n'){
    
    alert('wrong answer');
}
else {
    alert('please aswer with yes/y or no/n')
}
}
question1();

function question2(){

let v2= prompt('do you think I am married?')
v2=v2.toLowerCase();
if (v2==='yes'||v2==='y'){
alert('that\'s correct')
score++;
}
else if(v2==='no'||v2==='n'){
    
    alert('wrong answer');}
else {
    alert('please aswer with yes/y or no/n')
}
}
question2();

function question3(){

let v3 = prompt('do you think I have an baby?')
v3 =v3.toLowerCase();
if (v3==='yes'||v3==='y'){
alert('that\'s correct')
score++;
}


else if(v3==='no'||v3==='n'){
    
    alert('wrong answer');
}
else {
    alert('please aswer with yes/y or no/n')
}

}
question3();

function question4(){
let v4= prompt('do you think that i like reading?')
v4=v4.toLowerCase();
if (v4=='yes'||v4==='y'){
alert('that\'s correct')
score++;  
}
else if(v4==='no'||v4==='n'){
    
    alert('wrong answer');
}
else {
    alert('please aswer with yes/y or no/n')
}
}
question4();

function question5(){
let v5= prompt('would you like to know more about me?')

v5=v5.toLowerCase();

if (v5==='yes'||v5==='y'){

    alert('ok!, see you soon '+user)
    score++;
    
}
else if(v5==='no'||v5==='n'){

    alert('nice to meet you '+user);
}
else {
    alert('please aswer with yes/y or no/n')}

}
question5();

function question6(){
let index = prompt('try to enter the right number between 0 to 10, you have only 4 attempt.');
// let c = 0;
let rn = 5
rn=parseInt(rn)
for (let i = 0; i < 4; i++) {
    
    // c++;
    if (index == rn) {
        alert('correct!')
        break;
        score++;
    }
    else if (index > rn ){

        index =prompt('too high try again!');

    }else if(index < rn){

        index=prompt('too low try again')

    }else {

        alert('pleas write a number')
    }
    if (i == 3){
        alert('you run out of trial the correct number is 5')
    

    }
}
}
question6();


// if (c>4){

// console.log(c);

// }
// if (i == 3){
//     alert('you run out of trial the correct number is 5')



    


// let t1 = '';
//     let hobbies=['reading','skiing','swimming','fix things'];

// //     console.log(hobbies.length);
//  t1 = prompt('whats my favourit hobbies?,write down one of them. you have 6 attempt!.');
// for (let i = 0; i < 5; i++) {
//     for(let j = 0; j<hobbies.length; j++){
//         if(hobbies[i] === t1)
//         alert('correct');
//         j=10;

//     }
//     if(i===5){
//     alert('out of trials the answer is' + hobbies)
// }
// else if(i<6){

//     alert ('wrong answer')
// }



function question7(){


let trial='';
let hobbies =['reading','skiing','swimming','fix things'];


// let flag=false;
for (let j = 0; j <6; j++) {
    trial=prompt('guess one of my hobbies');

    for (let i = 0; i < hobbies.length; i++) {
        
        console.log(hobbies[i]);
        if (hobbies[i]===trial) {
            alert('correct, and here are all the answers '+hobbies);
            
            score++;
            j=10;
        }

    }
    if (j===5) {
        alert('sorry no more tries '+hobbies);
    }else if(j<6){
        alert('wrong answer');
    }


}
}
question7();

alert(`thank you ${user}, your score is ${score}/7`);

    