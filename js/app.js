'use strict';
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