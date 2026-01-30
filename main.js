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
    currentOperand = currentOperand.toString() + num;
}

// chhose operation
function chooseOperation(operation){

}


// compute
function compute(){

}


// update display
function updateDisplay(){
    currentOperandElement.innerText = currentOperand;
}



numberBtns.forEach((btn) => {
    btn.addEventListener('click', function(){
        appendNum(btn.innerText);
        updateDisplay()
    })
})