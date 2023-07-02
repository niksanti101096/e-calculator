// Global Variables

let num1 = "";
let num2 = "";
let total = "0";
let global_operator = "";
// For continuous operation
let contOperation = false;
// For continuous operation to compute
let contOperationEquals = true;
// For continuous equals
let contEquals = 0;
// To clear the input boxes when entering new numbers after clicking equals
let clearBoxAfterEquals = false;
// For history
let record = [];
let inputBoxLimit = 13;

function addition(num1,num2) {
    return parseFloat(num1) + parseFloat(num2);
}
function subtraction(num1,num2) {
    return parseFloat(num1) - parseFloat(num2);
}
function multiplication(num1,num2) {
    return parseFloat(num1) * parseFloat(num2);
}
function division(num1,num2) {
    return parseFloat(num1) / parseFloat(num2);
}

function clickNumEvent(num) {
    let displayBoxLimit = () => document.getElementById("inputBox").value.length;
    let temp = document.getElementById("inputBox").value;
    if (temp == "0") {
        document.getElementById("inputBox").value = "";
    }
    if (clearBoxAfterEquals == true) {
        document.getElementById("disabledBox").value = "";
        clearBoxAfterEquals = false;
    }
    if (document.getElementById("inputBox").value == total) {
        global_operator = "";
    }

    if (displayBoxLimit() != inputBoxLimit || displayBoxLimit() == total.toString().length) {
        switch (num) {
            case 1:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "1";
                } else {
                    document.getElementById("inputBox").value += "1";
                }
                break;
            case 2:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "2";
                } else {
                    document.getElementById("inputBox").value += "2";
                }
                break;
            case 3:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "3";
                } else {
                    document.getElementById("inputBox").value += "3";
                }
                break;
            case 4:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "4";
                } else {
                    document.getElementById("inputBox").value += "4";
                }
                break;
            case 5:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "5";
                } else {
                    document.getElementById("inputBox").value += "5";
                }
                break;
            case 6:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "6";
                } else {
                    document.getElementById("inputBox").value += "6";
                }
                break;
            case 7:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "7";
                } else {
                    document.getElementById("inputBox").value += "7";
                }
                break;
            case 8:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "8";
                } else {
                    document.getElementById("inputBox").value += "8";
                }
                break;
            case 9:
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "9";
                } else {
                    document.getElementById("inputBox").value += "9";
                }
                break;
            case 0:
                if (total == document.getElementById("inputBox").value || document.getElementById("inputBox").value == "0") {
                    document.getElementById("inputBox").value = "0";
                } else {
                    document.getElementById("inputBox").value += "0";
                }
                break;
            default:
                break;
        }
        contOperationEquals = true;
    }
}

function getStandardOperator(operator) {
    if (document.getElementById("inputBox").value != "0" && document.getElementById("inputBox").value != "") {
        if (contOperation == true) {
            if (contOperationEquals == true) {
                equal();
                num1 = total;
            }
        } else {
            num1 = document.getElementById("inputBox").value;
            
        }
        document.getElementById("disabledBox").value = `${num1} ${operator}`;
        global_operator = operator;
        document.getElementById("inputBox").value = "0";
        contOperation = true;
        contEquals = 0;
        clearBoxAfterEquals = false;
        contOperationEquals = false;
    } else {
        document.getElementById("inputBox").value = "0";
    }
}

function equal() {
    if (document.getElementById("inputBox").value != "0" && document.getElementById("inputBox").value != "") {
        if (contEquals == 0) {
            num2 = document.getElementById("inputBox").value;
            contEquals = 1;
        } else {
            num1 = total;
        }
        switch (global_operator) {
            case "+":
                total = addition(num1,num2);
                inputLimit();
                document.getElementById("inputBox").value = total;
                contOperation = false;
                clearBoxAfterEquals = true;
                document.getElementById("modal-list").innerHTML += `<li> ${num1} ${global_operator} ${num2} = ${total} </li>`;
                document.getElementById("disabledBox").value = `${num1} ${global_operator} ${num2} =`;
                break;
            case "-":
                total = subtraction(num1,num2);
                inputLimit();
                document.getElementById("inputBox").value = total;
                contOperation = false;
                clearBoxAfterEquals = true;
                document.getElementById("modal-list").innerHTML += `<li> ${num1} ${global_operator} ${num2} = ${total} </li>`;
                document.getElementById("disabledBox").value = `${num1} ${global_operator} ${num2} =`;
                break;
            case "x":
                total = multiplication(num1,num2);
                inputLimit();
                document.getElementById("inputBox").value = total;
                contOperation = false;
                clearBoxAfterEquals = true;
                document.getElementById("modal-list").innerHTML += `<li> ${num1} ${global_operator} ${num2} = ${total} </li>`;
                document.getElementById("disabledBox").value = `${num1} ${global_operator} ${num2} =`;
                break;
            case "÷":
                total = division(num1,num2);
                inputLimit();
                document.getElementById("inputBox").value = total;
                contOperation = false;
                clearBoxAfterEquals = true;
                document.getElementById("modal-list").innerHTML += `<li> ${num1} ${global_operator} ${num2} = ${total} </li>`;
                document.getElementById("disabledBox").value = `${num1} ${global_operator} ${num2} =`;
                break;
            default:
                break;
        }
    } else {
        document.getElementById("inputBox").value = total;
    }
    
}

function inputLimit() {
    if (total.toString().length >= inputBoxLimit) {
        if (total > 1) {
            total = Math.round(total / 1000000000000) * 1000000000000;
            total = parseFloat(total.toString().slice(0, -(total.toString().length - 13)));
        } else {
            total = parseFloat(total).toFixed(2);
        }
    }
}

function getClearAll() {
    document.getElementById("inputBox").value = "0";
    document.getElementById("disabledBox").value = "";
    num1 = "";
    num2 = "";
    total = "0";
    global_operator = "";
    contOperation = false;
}

function getDot() {
    document.getElementById("inputBox").value += ".";
}

function getClear() {
    document.getElementById("inputBox").value = "0";
}

function deleteEnd() {
    let toSlice = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = toSlice.slice(0, -1);
    if (document.getElementById("inputBox").value == "") {
        document.getElementById("inputBox").value = "0";
    }
}

function negate() {
    let toNegate = document.getElementById("inputBox").value;
    if (toNegate != 0) {
        document.getElementById("inputBox").value = parseFloat(toNegate) * -1;
    }
}

function reciprocal() {
    num1 = document.getElementById("inputBox").value;
    total = 1 / parseFloat(num1);
    inputLimit()
    document.getElementById("inputBox").value = total;
    document.getElementById("disabledBox").value = `1 / (${num1})`;
    document.getElementById("modal-list").innerHTML += `<li> 1 / (${num1}) = ${total} </li>`;
}

function square() {
    num1 = document.getElementById("inputBox").value;
    total = num1 * num1;
    console.log(total)
    document.getElementById("inputBox").value = total;
    document.getElementById("disabledBox").value = `sqr(${num1})`;
    document.getElementById("modal-list").innerHTML += `<li> sqr(${num1}) = ${total} </li>`;
}

function squareRoot() {
    num1 = document.getElementById("inputBox").value;
    total = Math.sqrt(num1);
    document.getElementById("inputBox").value = total;
    document.getElementById("disabledBox").value = `√(${num1})`;
    document.getElementById("modal-list").innerHTML += `<li> √(${num1}) = ${total} </li>`;
}

function remainder() {
    num1 = document.getElementById("inputBox").value;
    total = num1 / 100;
    document.getElementById("inputBox").value = total;
    document.getElementById("disabledBox").value = `${num1}%`;
    document.getElementById("modal-list").innerHTML += `<li> ${num1}% = ${total} </li>`;
}

function clearHistory() {
    document.getElementById("modal-list").innerHTML = ``;
}

// Keyboard

document.addEventListener("keydown", holder => {
    if (holder.key == "Enter") {
        equal();
    }
    else if (holder.location == 3 || holder.key == "Backspace") {
        let displayBoxLimit = () => document.getElementById("inputBox").value.length;
        let temp = document.getElementById("inputBox").value;
        if (temp == "0") {
            document.getElementById("inputBox").value = "";
        }
        if (clearBoxAfterEquals == true) {
            document.getElementById("disabledBox").value = "";
            clearBoxAfterEquals = false;
        }
        if (document.getElementById("inputBox").value == total) {
            global_operator = "";
        }
        if (displayBoxLimit() != inputBoxLimit || displayBoxLimit() == total.toString().length) {
            if (holder.key == "0") {
                if (total == document.getElementById("inputBox").value || document.getElementById("inputBox").value == "0") {
                    document.getElementById("inputBox").value = "0";
                } else {
                    document.getElementById("inputBox").value += "0";
                }
            }
            if (holder.key == "1") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "1";
                } else {
                    document.getElementById("inputBox").value += "1";
                } 
            }
            if (holder.key == "2") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "2";
                } else {
                    document.getElementById("inputBox").value += "2";
                }
                
            }
            if (holder.key == "3") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "3";
                } else {
                    document.getElementById("inputBox").value += "3";
                }
            }
            if (holder.key == "4") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "4";
                } else {
                    document.getElementById("inputBox").value += "4";
                }
            }
            if (holder.key == "5") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "5";
                } else {
                    document.getElementById("inputBox").value += "5";
                }
            }
            if (holder.key == "6") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "6";
                } else {
                    document.getElementById("inputBox").value += "6";
                }
            }
            if (holder.key == "7") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "7";
                } else {
                    document.getElementById("inputBox").value += "7";
                }
            }
            if (holder.key == "8") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "8";
                } else {
                    document.getElementById("inputBox").value += "8";
                }
            }
            if (holder.key == "9") {
                if (total == document.getElementById("inputBox").value) {
                    document.getElementById("inputBox").value = "9";
                } else {
                    document.getElementById("inputBox").value += "9";
                }
            }
            contOperationEquals = true;
        }
        if ((holder.key == "+" && holder.shiftKey) || holder.key == "+") {
            getStandardOperator("+");
        }
        if (holder.key == "-") {
            getStandardOperator("-");
        }
        if (holder.key == "*") {
            getStandardOperator("x");
        }
        if (holder.key == "/") {
            getStandardOperator("÷");
        }
        if (holder.key == "Backspace") {
            deleteEnd();
        }
        if (holder.key == "Escape") {
            if (document.getElementById("inputBox").value == "") {
                document.getElementById("inputBox").value = "0";
            }
        }
    }
});

