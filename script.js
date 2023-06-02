let x, y;


function add(x, y){
    return x+y;
}
function subtract(x, y){
    return x-y;
}
function multiply(x, y){
    return x*y;
}
function divide(x, y){
    return x/y;
}

function operate(s,x,y){
    if(s == "+"){
        return add(x,y);
    }
    else if (s == "-"){
        return subtract(x,y);
    }
    else if (s == "*"){
        return multiply(x,y);
    }
    else if (s == "/"){
        return divide(x,y);
    }
    return "error";
}

