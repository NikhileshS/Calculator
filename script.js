let num1;
let operator;
let num2;

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
    return (a/b);
}

function operate(num1,operator,num2){
    if (operator === '+'){
        return console.log(add(num1,num2));
    }
    else if (operator === '-'){
        return console.log(sub(num1,num2));
    }
    else if (operator === '*'){
        return console.log(mul(num1,num2));
    }
    else if (operator === '/'){
        return console.log(div(num1,num2));
    }
    else {
        return console.log('Invalid operation');
    }
}

