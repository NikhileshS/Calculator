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
const btn = document.querySelectorAll('.btn');
btn.forEach(btn => {
    btn.addEventListener('click',() =>{
        let num = btn.textContent;
        arr.push(num);
        arr2.push(num);
        return display.textContent = arr.join('');
    })
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
        if(operator !== 0){
          arr = [];
          no2 = arr2.join('')
          disptot = operate(parseInt(no1),operator,parseInt(no2));
          return display.textContent = disptot  
        }
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
        if(operator !== 0){
          arr = [];
          no2 = arr2.join('')
          disptot = operate(parseInt(no1),operator,parseInt(no2));
          return display.textContent = disptot  
        }
    arr.push('-');
    no1 = arr2.join('');
    arr2 = [];
    operator = '-';
    return display.textContent = arr.join('');
    }
}
else{
    disptot = display.textContent
    arr =[]
    arr.push(disptot);
    arr.push('-');
    no1 = disptot;
    arr2 = [];
    operator = '-';
    disptot = 0;
    return display.textContent = arr.join('');
}
}
)

// Multiplication function // 
const multi = document.querySelector(".multi")
multi.addEventListener('click',() => {
    if(disptot === 0 || isNaN(disptot)){
    if(arr.length === 0 ){
        alert('Please enter a number')
        return display.textContent = 0;
    }
    else{
        if(operator !== 0){
            arr = [];
            no2 = arr2.join('')
            disptot = operate(parseInt(no1),operator,parseInt(no2));
            return display.textContent = disptot  
          }
    arr.push('*');
    no1 = arr2.join('');
    arr2 = [];
    operator = '*';
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
        if(operator !== 0){
            arr = [];
            no2 = arr2.join('')
            disptot = operate(parseInt(no1),operator,parseInt(no2));
            return display.textContent = disptot  
          }
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




