let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let value = "";
let operator = "";
let value_1 = '';
buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
                value = "";
                value_1 = "";
                operator = "";
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    value = value.slice(0,-1);
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if(display.value == ""){
                    display.innerText = "";
                }
                display.innerText +=e.target.innerText;
                value += e.target.innerText;
                console.log(value);
                console.log(e.target.innerText);
                break;
            case '-':
            case '+':
            case '/':
            case '*':
                if(operator != ""){
                    value_1= operate(operator, value_1, value);
                    value = "";
                    operator = e.target.innerText;;
                    display.innerText +=e.target.innerText;
                    console.log(operator);
                    break;
                }
                display.innerText +=e.target.innerText;
                operator += e.target.innerText;
                console.log(operator);
                value_1 = value;
                value = '';
                break;
            case '=':
                display.innerText = "";
                let answer = operate(operator, value_1, value);
                display.innerText += answer;
                value = answer;
                value_1 = "";
                operator = "";
                break;
            case ".":
                if(value.includes(".")){
                    break;
                }
                display.innerText +=e.target.innerText;
                value += e.target.innerText;
                break;
            default:
                display.innerText +=e.target.innerText;
                value += e.target.innerText;
        }

    });
});

function add(x, y){
    x = parseFloat(x);
    y = parseFloat(y);
    return x+y;
}
function subtract(x, y){
    x = parseFloat(x);
    y = parseFloat(y);
    return x-y;
}
function multiply(x, y){
    x = parseFloat(x);
    y = parseFloat(y);
    return x*y;
}
function divide(x, y){
    x = parseFloat(x);
    y = parseFloat(y);
    return x/y;
}
function check(x){
    if (x%1 == 0){
        return parseInt(x);
    }
    else{
        return x.toFixed(3);
    }
}
function operate(s,x,y){
    x = parseFloat(x);
    y = parseFloat(y);
    if(s == "+"){
        return check(add(x,y));
    }
    else if (s == "-"){
        return check(subtract(x,y));
    }
    else if (s == "*"){
        return check(multiply(x,y));
    }
    else if (s == "/"){
        return check(divide(x,y));
    }
    return "error!";
}