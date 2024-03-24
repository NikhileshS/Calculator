// Variable initialization //
let no1 = 0;
let no2 = 0;
let operator = 0;
let disptot = 0;
let displayno = 0;

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if (b==0){
        return 'Not possible'
    }
    else{
    return (a/b);
    }
}

// Operation part of the calculator //
function operate(num1,operator,num2){
    if (operator === '+'){
        return add(num1,num2);
    }
    else if (operator === '-'){
        return sub(num1,num2);
    }
    else if (operator === '*'){
        return mul(num1,num2);
    }
    else if (operator === '/'){
        return div(num1,num2);
    }
    else {
        return console.log('Invalid operation');
    }
}

const display = document.querySelector('.display');
let arr = [];
let arr2 = [];
let oper;

// Wiring up each HTML buttons to do their respective actions //
const button1 = document.querySelector(".one");
button1.addEventListener('click',() => {
    arr.push(1);
    arr2.push(1);
    return display.textContent = arr.join('');
})
const button2 = document.querySelector(".two");
button2.addEventListener('click',() => {
    arr.push(2);
    arr2.push(2);
    return display.textContent = arr.join('');
})
const button3 = document.querySelector(".three");
button3.addEventListener('click',() => {
    arr.push(3);
    arr2.push(3);
    return display.textContent = arr.join('');
})
const button4 = document.querySelector(".four");
button4.addEventListener('click',() => {
    arr.push(4);
    arr2.push(4);
    return display.textContent = arr.join('');
})
const button5 = document.querySelector(".five");
button5.addEventListener('click',() => {
    arr.push(5);
    arr2.push(5);
    return display.textContent = arr.join('');
})
const button6 = document.querySelector(".six");
button6.addEventListener('click',() => {
    arr.push(6);
    arr2.push(6);
    return display.textContent = arr.join('');
})
const button7 = document.querySelector(".seven");
button7.addEventListener('click',() => {
    arr.push(7);
    arr2.push(7);
    return display.textContent = arr.join('');
})
const button8 = document.querySelector(".eight");
button8.addEventListener('click',() => {
    arr.push(8);
    arr2.push(8);
    return display.textContent = arr.join('');
})
const button9 = document.querySelector(".nine");
button9.addEventListener('click',() => {
    arr.push(9);
    arr2.push(9);
    return display.textContent = arr.join('');
})
const button0 = document.querySelector(".zero");
button0.addEventListener('click',() => {
    arr.push(0);
    arr2.push(0);
    return display.textContent = arr.join('');
})

// Addition Function //
const addi = document.querySelector(".addi")
addi.addEventListener('click',() => {
    if(disptot === 0 || isNaN(disptot)){
    if(arr.length === 0 ){
        alert('Please enter a number')
        return display.textContent = 0;
    }
    else{
    arr.push('+');
    no1 = arr2.join('');
    arr2 = [];
    operator = '+';
    return display.textContent = arr.join('');
    }
}
else{
    disptot = display.textContent
    arr =[]
    arr.push(disptot);
    arr.push('+');
    no1 = disptot;
    arr2 = [];
    operator = '+';
    disptot = 0;
    return display.textContent = arr.join('');
}
}
)

// Subtraction function // 
const subtra = document.querySelector(".subtra")
subtra.addEventListener('click',() => {
    if(disptot === 0 || isNaN(disptot)){
    if(arr.length === 0 ){
        alert('Please enter a number')
        return display.textContent = 0;
    }
    else{
    arr.push('-');
    no1 = arr2.join('');
    operator = '-'
    return display.textContent = arr.join('');
    }
}
else{
    disptot = display.textContent
    arr =[]
    arr.push(disptot);
    arr.push('-');
    no1 = disptot;
    arr2=[];
    operator = '-';
    disptot = 0;
    return display.textContent = arr.join('');
}
})

// Multiplication function // 
const multi = document.querySelector(".multi")
multi.addEventListener('click',() => {
    if(disptot === 0 || isNaN(disptot)){
    if(arr.length === 0 ){
        alert('Please enter a number')
        return display.textContent = 0;
    }
    else{
    arr.push('*');
    no1 = arr2.join('');
    arr2 = [];
    operator = '*'
    return display.textContent = arr.join('');
    }
}
else{
    disptot = display.textContent
    arr =[]
    arr.push(disptot);
    arr.push('*');
    no1 = disptot;
    arr2=[];
    operator = '*';
    disptot = 0;
    return display.textContent = arr.join('');
}
})

// Divide function //
const divide = document.querySelector(".divide")
divide.addEventListener('click',() => {
    if(disptot === 0 || isNaN(disptot)){
    if(arr.length === 0 ){
        alert('Please enter a number')
        return display.textContent = 0;
    }
    else{
    arr.push('/');
    no1 = arr2.join('');
    arr2 = [];
    operator = '/'
    return display.textContent = arr.join('');
    }
}
else{
    disptot = display.textContent
    arr =[]
    arr.push(disptot);
    arr.push('/');
    no1 = disptot;
    arr2=[];
    operator = '/';
    disptot = 0;
    return display.textContent = arr.join('');
}
})

// Clear function //
const clear = document.querySelector('.clear')
clear.addEventListener('click', () =>{
    arr = [];
    arr2 = [];
    no1 = 0;
    no2 = 0;
    return display.textContent = 0
})

// Equal Function //
const equals = document.querySelector('.equal');
equals.addEventListener('click',()=>{
    arr = [];
    no2 = arr2.join('');
    if(no1 === 0 ){
        disptot = no2;
        displayno = disptot;
        disptot = 0;
        no2 = 0;
        arr2 = [];
    }
    else{
        disptot = operate(parseInt(no1),operator,parseInt(no2));
        if(isNaN(disptot)){
            alert('Invalid format')
            displayno =0
            disptot = 0;
            no1=0;
            no2=0;
            arr = [];
            arr2 = [];
        }
        else{
        displayno = disptot;
        no1=0;
        no2=0;
        arr=[];
        arr2=[];
        }
    }
    return display.textContent = displayno;
})




