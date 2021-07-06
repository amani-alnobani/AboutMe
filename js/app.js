'use strict';

let score = 7
let user = prompt('what is your name?')
alert('HELLO '+ user)
alert('we going to play gussing game, Answer with yes or no. let us start.')
let v1= prompt('do you think I am an Engineer?')
v1=v1.toLowerCase();
if (v1==='yes'||v1==='y'){
alert('that\'s correct')
    
}else if(v1==='no'||v1==='n'){
    
    alert('wrong answer');
}
else {
    alert('please aswer with yes/y or no/n')
}



let v2= prompt('do you think I am married?')
v1=v2.toLowerCase();
if (v2==='yes'||v2==='y'){
alert('that\'s correct')
    
}
else if(v2==='no'||v2==='n'){
    
    alert('wrong answer');}
else {
    alert('please aswer with yes/y or no/n')
}

let v3 = prompt('do you think I have an baby?')
v3 =v3.toLowerCase();
if (v3==='yes'||v3==='y'){
alert('that\'s correct')
    
}

else if(v3==='no'||v3==='n'){
    
    alert('wrong answer');
}
else {
    alert('please aswer with yes/y or no/n')
}


let v4= prompt('do you think that i like reading?')
v4=v4.toLowerCase();
if (v4=='yes'||v4==='y'){
alert('that\'s correct')
    
}
else if(v4==='no'||v4==='n'){
    
    alert('wrong answer');
}
else {
    alert('please aswer with yes/y or no/n')
}

let v5= prompt('would you like to know more about me?')

v5=v5.toLowerCase();

if (v5==='yes'||v5==='y'){

    alert('ok!, see you soon '+user)
    
}
else if(v5==='no'||v5==='n'){

    alert('nice to meet you '+user);
}
else {
    alert('please aswer with yes/y or no/n')
}
let index = prompt('try to enter the right number, you have only 4 attempt.') ;
for (let i = 0; i < 4; i++) {
    if (index === '5') {
        alert('correct!')
        break
    }
    else{

        index=prompt('try again!')
    }
}
    alert('the right answer was number 5')



    let hobbies=['reading','skiing','swimming','fix things'];

    console.log(hobbies.length);
let t1 = prompt('whats my favourit hobbies?,write down one of them. you have 6 attempt!.');
for (let i = 0; i < 5; i++) {
    let score = 0
    for (let j = 0; j < hobbies.length; j++) {
         
        switch (t1) {
            case 'reading':
                alert('right')
                break;
            case 'skiing':
                alert('right')
                break;

            case 'swimming':
                alert('right')
                break;

            case 'fix things':
                alert('right')
                break;

            default:
               t1=prompt('try again')
                break;
            
        }
        
        break;
    }
    
    if (t1 === 'reading' || t1 === 'skiing' || t1 === 'swimming' || t1 === 'fix things' ) {
        break;
    }
    
}
alert('my hobbies are [ reading , skiing , swimming , fix things]')

 alert('you have a score of '+ score+'/7')


