// get all elements
const prevOperandElement = document.querySelector('.prev-operand')
const currentOperandElement = document.querySelector('.current-operand')

const numberBtns = document.querySelectorAll('.operand')
const operatorBtns = document.querySelectorAll('.operator')
const equalBtn  = document.querySelector('.equal')
const allClearBtn  = document.querySelector('.all-clear')
const deleteBtn  = document.querySelector('.delete')

// global variable
let currentOperand = '';
let prevOperand = '';
let operation;




// all clear function
function allClear(){}


// delete function
function deleteNum(){}


// append number funtion
function appendNum(num){
    //check for multiple decimal point
    if(num === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + num.toString();
}

// chhose operation
function chooseOperation(chooseOperation){
    // prevent compute if no number passed before entering operation btn
    if(currentOperand === '') return;
    operation = chooseOperation;
    prevOperand = currentOperand
    currentOperand = '';
}


// compute
function compute(){
    let prevNum = Number(prevOperand)
    let currentNum = Number(currentOperand)
    let result;

    switch(operation){
        case  '+':
            result = prevNum + currentNum;
            break
        case  '-':
            result = prevNum - currentNum;
            break
        case  '*':
            result = prevNum * currentNum;
            break
        case  '/':
            result = prevNum / currentNum;
            break
        default:
            return;
    };

    currentOperand = result;
    
}


// update display
function updateDisplay(){
    currentOperandElement.innerText = currentOperand;
    prevOperandElement.innerText = prevOperand;
    // currentOperandElement.innerText = '';
}



numberBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        appendNum(btn.innerText);
        updateDisplay()
    })
})

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        chooseOperation(btn.innerText);
        updateDisplay()
    })
})


equalBtn.addEventListener('click', function(){
    compute()
    updateDisplay()
})