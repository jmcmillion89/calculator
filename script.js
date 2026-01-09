const numberBtns = document.querySelectorAll('.number')
const operatorBtns = document.querySelectorAll('.operator')
const equalBtn = document.querySelector('.equal')
const clearBtn = document.querySelector('.clear')
const operationText = document.querySelector('.operation')
const totalText = document.querySelector('.total')

numberBtns.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        if ((operator === "") &&
            total === "") {
                numA = numA + e.target.value
                totalText.textContent = `${numA}`
            }
            else {
                numB = numB + e.target.value
                totalText.textContent = `${numA} ${operator} ${numB}`
            }
    })
})

operatorBtns.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        if ((operator === "") && (numA !== "")) {
                operator = e.target.value
                totalText.textContent = `${numA} ${operator}`
            }
    })
})

equalBtn.addEventListener(('click'), () => {
        if ((numA!== "") &&
            (numB!== "") &&
            (operator !== "")) {
                calculate(numA, operator, numB)
}})


clearBtn.addEventListener(('click'), () => {
    clear()
})

let numA = ""
let numB = ""
let operator = "";
let total = "";

function calculate(numInputA, operatorInput, numInputB) {
    if ((numInputA !== "") ||
        (numInputB !== "") ||
        (operatorInput !== "")) {

            if (operatorInput === '+') {
                total = parseInt(numInputA) + parseInt(numInputB)
            }
            if (operatorInput === "-") {
                total = parseInt(numInputA) - parseInt(numInputB)
            }
            if (operatorInput === "*") {
                total = parseInt(numInputA) * parseInt(numInputB)
            }
            if (operatorInput === "/") {
                total = parseInt(numInputA) / parseInt(numInputB)
            
            }
    if (total !== "") {
        operationText.textContent = `${numA} ${operator} ${numB}`
        totalText.textContent = `${total}`
        numA = total
        numB = ""
        operator = ""
    }
            }
        }

function clear() {
    numA = ""
    numB = ""
    operator = "";  
    total = "";
    operationText.textContent = "-"
    totalText.textContent = "-"
}